const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages({
  trailingSlash: true,
  images: {
    deviceSizes: [640, 960, 1280, 1920],
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
      "/job": { page: "/job" },
    };
  },
});
