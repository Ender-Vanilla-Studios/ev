/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ender-vanilla.su',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: [
        '/ss',
        '/example',
        '/r',
        '/mlg'
    ],
};