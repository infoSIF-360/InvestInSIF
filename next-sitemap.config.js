/** @type {import('next-sitemap').IConfig} */
const funds = [
  { slug: "edelweiss-altiva" },
  { slug: "quant-qsif" },
  // Add all your current fund slugs here
];

module.exports = {
  siteUrl: "https://investinsif.com",
  generateRobotsTxt: true, // generates robots.txt
  sitemapSize: 50000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, url) => {
    // Default transformation
    return {
      loc: url, // URL of the page
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    // Dynamically add all fund slugs to the sitemap
    const fundUrls = funds.map((fund) => ({
      loc: `/sifmarketplace/${fund.slug}`,
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));

    return fundUrls;
  },
};
