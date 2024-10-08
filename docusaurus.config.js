// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jugend hackt Lab Münster',
  tagline: 'Knowledge Base des Jugend hackt Lab Münster',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jugendhackt-ms.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jugend hack Lab Münster', // Usually your GitHub org/user name.
  projectName: 'Knowledge Base', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/openSenseLab/jugendhackt-ms-kb/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jugend hackt Lab Münster',
        logo: {
          alt: 'Jugend hackt Alpaka Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Anleitungen',
          },
          {
            href: 'https://github.com/openSenseLab/jugendhackt-ms-kb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Anleitungen',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Jugend hackt',
                href: 'https://jugendhackt.org',
              },
              {
                label: 'Lab Münster',
                href: 'https://jugendhackt.org/lab/muenster/',
              },
              {
                label: 'openSenseLab',
                href: 'https://opensenselab.org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/openSenseLab/jugendhackt-ms-kb',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jugend hackt Lab Münster`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
};

module.exports = config;
