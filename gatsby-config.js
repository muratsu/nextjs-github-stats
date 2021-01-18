const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Next.js stats',
    source: 'https://github.com/muratsu/nextjs-github-stats',
    repoNameWithOwner: 'vercel/next.js'
  },
  plugins: [
    {
      resolve: `gatsby-theme-github-stats`,
      options: {
        dataPath: path.join(__dirname, `src`, `data`),
      },
    },
  ],
};
