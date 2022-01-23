module.exports = {
  title: "Brendan Hulme",
  tagline: 'Technology Leader, Solution and Enterprise Architect, and Consultant, with over 20 years experience in the industry',
  url: 'https://b-hulme.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'b-hulme', // Usually your GitHub org/user name.
  projectName: 'b-hulme.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Brendan Hulme',
      logo: {
        alt: 'Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/b-hulme',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Me',
          items: [
            {
              label: 'Carerr History',
              to: 'docs/',
            },
            {
              label: 'Tech Skills',
              to: 'docs/about-skills/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/brendan-hulme-a70bb210',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/b-hulme',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brendan Hulme. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          postsPerPage: 1,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Brendan Hulme`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
