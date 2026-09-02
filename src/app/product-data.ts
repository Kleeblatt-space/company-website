export type ProductId = "studio" | "api" | "adventure";

export type Product = {
  id: ProductId;
  number: string;
  title: string;
  label: string;
  intro: string;
  description: string;
  bullets: string[];
  steps: string[];
  color: "mint" | "sky" | "lavender";
};

export const products: Product[] = [
  {
    id: "studio",
    number: "01",
    title: "TileSmith Studio",
    label: "Creator workspace",
    intro: "A focused workspace for building, editing, and managing tile-based game assets.",
    description: "TileSmith Studio keeps the creative part of the pipeline in one calm workspace. Shape maps, generate terrain sets, and manage the access your team needs without losing the thread.",
    bullets: ["Map editor with live preview", "Tileset generator for terrain variants", "Cloud workspace and API key management"],
    steps: ["Make assets in Studio", "Preview each change at engine resolution", "Export a clean set for the next build"],
    color: "mint",
  },
  {
    id: "api",
    number: "02",
    title: "Asset Pipeline API",
    label: "Developer infrastructure",
    intro: "A programmable API for quality scoring and production-ready asset conversion.",
    description: "Two independent endpoints take raw pixel assets from first check to engine-ready output. The process is designed to be inspectable, repeatable, and easy to place in CI.",
    bullets: ["QC Score with transparent metrics", "Autotile conversion for raw pixel PNGs", "CI-ready endpoints with reproducible output"],
    steps: ["POST an asset to /v1/score", "Review the reproducible quality result", "POST approved assets to /v1/convert"],
    color: "sky",
  },
  {
    id: "adventure",
    number: "03",
    title: "Kleeblatt Adventure",
    label: "Playable proof",
    intro: "A browser adventure that turns the pipeline into a living, playable world.",
    description: "Kleeblatt Adventure is the playable proof of the system: procedural maps are assembled from the same asset pipeline, so every run gives the tools a real place to perform.",
    bullets: ["Procedural maps generated at runtime", "Hero system, cards, combat, and XP", "Gameplay first — ownership optional"],
    steps: ["Enter a generated map", "Play through the asset set in context", "Feed learnings back into the pipeline"],
    color: "lavender",
  },
];

export function getProduct(id: string): Product {
  return products.find((product) => product.id === id) ?? products[0];
}
