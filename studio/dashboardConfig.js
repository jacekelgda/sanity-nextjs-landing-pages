export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ffd7d56790ebfe5363b2b9f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wq1j2saw',
                  apiId: '4792e73c-06a3-4ba5-aa4d-31942aa5e535'
                },
                {
                  buildHookId: '5ffd7d57147b07eaee84de60',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v5i92jqd',
                  apiId: 'f72cce2d-728a-4db4-8bb8-411e86033bf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jacekelgda/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v5i92jqd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
