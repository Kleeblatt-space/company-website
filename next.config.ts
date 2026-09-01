import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

// Liest den Repo-Namen aus den GitHub Actions (z.B. "company-website")
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Setzt den Pfad automatisch auf /company-website, wenn es in Actions gebaut wird
  basePath: repo ? `/${repo}` : undefined,
  assetPrefix: repo ? `/${repo}/` : undefined,
};

export default nextConfig;
