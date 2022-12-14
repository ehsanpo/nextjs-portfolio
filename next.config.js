module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/music": { page: "/music" },
      "/gallery": { page: "/gallery" },
      "/skills": { page: "/skills" },
      "/portfolio": { page: "/portfolio" },
    };
  },
};
