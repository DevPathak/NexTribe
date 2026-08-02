import { useEffect, useRef } from "react";
import { LAND_POINTS } from "@/lib/world-dots";

/**
 * Premium dot-matrix globe: real Natural Earth landmasses sampled onto a
 * sphere and drawn with an orthographic projection on a rotating canvas.
 */
export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const css = getComputedStyle(document.documentElement);
    const teal = css.getPropertyValue("--brand-cyan").trim() || "#7fd8e0";
    const orange = css.getPropertyValue("--brand-orange").trim() || "#e0803f";

    let size = 0;
    let dpr = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = rect.width;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Pre-compute unit-sphere coordinates for every land sample.
    const n = LAND_POINTS.length / 2;
    const px = new Float32Array(n);
    const py = new Float32Array(n);
    const pz = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const lon = (LAND_POINTS[i * 2] * Math.PI) / 180;
      const lat = (LAND_POINTS[i * 2 + 1] * Math.PI) / 180;
      const cl = Math.cos(lat);
      px[i] = cl * Math.cos(lon);
      py[i] = Math.sin(lat);
      pz[i] = cl * Math.sin(lon);
    }

    // Slight axial tilt, like a real globe on a stand.
    const tilt = (-18 * Math.PI) / 180;
    const st = Math.sin(tilt);
    const cs = Math.cos(tilt);

    let raf = 0;
    let rot = 0;
    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      if (!reduce) rot += dt * 0.000075;

      const w = canvas.width;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, w, w);
      ctx.scale(dpr, dpr);

      const c = size / 2;
      const r = size * 0.46;

      // Atmosphere bloom
      const glow = ctx.createRadialGradient(c, c, r * 0.82, c, c, r * 1.16);
      glow.addColorStop(0, `color-mix(in oklab, ${orange} 26%, transparent)`);
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(c, c, r * 1.16, 0, Math.PI * 2);
      ctx.fill();

      // Ocean sphere
      const ocean = ctx.createRadialGradient(
        c - r * 0.32,
        c - r * 0.36,
        r * 0.08,
        c,
        c,
        r,
      );
      ocean.addColorStop(0, `color-mix(in oklab, ${teal} 16%, transparent)`);
      ocean.addColorStop(0.62, `color-mix(in oklab, ${teal} 7%, transparent)`);
      ocean.addColorStop(1, "transparent");
      ctx.fillStyle = ocean;
      ctx.beginPath();
      ctx.arc(c, c, r, 0, Math.PI * 2);
      ctx.fill();

      // Graticule
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = `color-mix(in oklab, ${teal} 14%, transparent)`;
      for (let lat = -60; lat <= 60; lat += 30) {
        const a = (lat * Math.PI) / 180;
        const rr = r * Math.cos(a);
        const yy = r * Math.sin(a);
        ctx.beginPath();
        ctx.ellipse(
          c + yy * st,
          c - yy * cs,
          rr,
          Math.abs(rr * st) + r * 0.02,
          0,
          0,
          Math.PI * 2,
        );
        ctx.stroke();
      }
      for (let k = 0; k < 6; k++) {
        const phase = rot + (k * Math.PI) / 6;
        const rx = Math.abs(r * Math.cos(phase));
        ctx.beginPath();
        ctx.ellipse(c, c, rx, r, tilt, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Land dots
      const sr = Math.sin(rot);
      const cr = Math.cos(rot);
      for (let i = 0; i < n; i++) {
        const x0 = px[i] * cr - pz[i] * sr;
        const z0 = px[i] * sr + pz[i] * cr;
        if (z0 <= 0.02) continue; // back hemisphere
        const y0 = py[i];
        const yt = y0 * cs - z0 * st;
        const zt = y0 * st + z0 * cs;
        const sx = c + x0 * r;
        const sy = c - yt * r;
        const depth = Math.max(0, Math.min(1, zt * 0.7 + 0.35));
        const dotR = (size / 300) * (0.75 + depth * 0.75);
        ctx.globalAlpha = 0.2 + depth * 0.7;
        ctx.fillStyle = depth > 0.72 ? teal : orange;
        ctx.beginPath();
        ctx.arc(sx, sy, dotR, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Rim light
      ctx.lineWidth = 1;
      ctx.strokeStyle = `color-mix(in oklab, ${orange} 55%, transparent)`;
      ctx.beginPath();
      ctx.arc(c, c, r, 0, Math.PI * 2);
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute right-[1%] top-[48%] hidden aspect-square h-auto w-[42vmin] -translate-y-1/2 opacity-80 lg:block xl:w-[48vmin]">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  );
}
