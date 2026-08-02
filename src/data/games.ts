import wordCross from "@/assets/game-word-cross.jpg";
import planked from "@/assets/game-planked.jpg";

export type Platform = "unity" | "apple" | "play" | "steam" | "xbox" | "ps";

export type Game = {
  slug: string;
  title: string;
  category: string;
  engine: string;
  status: string;
  cover: string;
  description: string;
  tags: string[];
  platforms: Platform[];
  to?: string;
};

export const GAMES: Game[] = [
  {
    slug: "planked",
    title: "Planked!",
    category: "Physics Puzzle",
    engine: "Unity",
    status: "Puzzle Platformer",
    cover: planked,
    description:
      "A delightful, physics-driven puzzle platformer. Use planks and screws to guide a charming furry character through challenging levels with intricate contraption designs, built for iOS & Android.",
    tags: ["Puzzle Platformer", "Physics-Based", "Cute Character"],
    platforms: ["unity", "apple", "play"],
    to: "/games/planked",
  },
  {
    slug: "word-cross",
    title: "Word Cross",
    category: "Mobile Word Puzzle",
    engine: "Unity",
    status: "Launched Title",
    cover: wordCross,
    description:
      "A charming nature-themed word puzzle experience. Connect letters, fill crossword grids, and discover new words in tranquil, procedurally generated jungle environments, built for iOS & Android.",
    tags: ["Word Cross Puzzle", "Jungle Theme", "Mobile Game"],
    platforms: ["unity", "apple", "play"],
    to: "/games/word-cross",
  },
];
