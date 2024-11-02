import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b8f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '676'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '25e'),
            routes: [
              {
                path: '/docs/autonity/intro',
                component: ComponentCreator('/docs/autonity/intro', '646'),
                exact: true,
                sidebar: "autonitySidebar"
              },
              {
                path: '/docs/autonity/quickstart',
                component: ComponentCreator('/docs/autonity/quickstart', 'bf0'),
                exact: true,
                sidebar: "autonitySidebar"
              },
              {
                path: '/docs/autonity/validator/backup',
                component: ComponentCreator('/docs/autonity/validator/backup', 'c16'),
                exact: true,
                sidebar: "autonitySidebar"
              },
              {
                path: '/docs/autonity/validator/quick-commands',
                component: ComponentCreator('/docs/autonity/validator/quick-commands', '357'),
                exact: true,
                sidebar: "autonitySidebar"
              },
              {
                path: '/docs/autonity/validator/troubleshooting',
                component: ComponentCreator('/docs/autonity/validator/troubleshooting', 'ec7'),
                exact: true,
                sidebar: "autonitySidebar"
              },
              {
                path: '/docs/autonity/validator/upgrading',
                component: ComponentCreator('/docs/autonity/validator/upgrading', '7b1'),
                exact: true,
                sidebar: "autonitySidebar"
              },
              {
                path: '/docs/celestia/bridge-da-node/monitoring',
                component: ComponentCreator('/docs/celestia/bridge-da-node/monitoring', '70e'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/bridge-da-node/running-bridge-node',
                component: ComponentCreator('/docs/celestia/bridge-da-node/running-bridge-node', '7e4'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/bridge-da-node/upgrading',
                component: ComponentCreator('/docs/celestia/bridge-da-node/upgrading', '032'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/bridge-da-node/zfs-storage-optional',
                component: ComponentCreator('/docs/celestia/bridge-da-node/zfs-storage-optional', '7ea'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/intro',
                component: ComponentCreator('/docs/celestia/intro', '140'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/quickstart',
                component: ComponentCreator('/docs/celestia/quickstart', 'edc'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/validator/quick-commands',
                component: ComponentCreator('/docs/celestia/validator/quick-commands', '98c'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/validator/register-validator',
                component: ComponentCreator('/docs/celestia/validator/register-validator', 'b54'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/validator/security',
                component: ComponentCreator('/docs/celestia/validator/security', 'cab'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/validator/troubleshoot',
                component: ComponentCreator('/docs/celestia/validator/troubleshoot', 'ca6'),
                exact: true,
                sidebar: "celestiaSidebar"
              },
              {
                path: '/docs/celestia/validator/upgrade-validator',
                component: ComponentCreator('/docs/celestia/validator/upgrade-validator', '5e1'),
                exact: true,
                sidebar: "celestiaSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
