export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604e1afb294defcc3736b2eb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-feqxapjh',
                  apiId: 'e8017662-e23e-4817-92ab-cb8cc937dd42'
                },
                {
                  buildHookId: '604e1afb53c6983142efeef6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-56zyvz1x',
                  apiId: '46084876-e3fa-425e-b45c-51f5ced46e75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RyanLuttrell/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-56zyvz1x.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
