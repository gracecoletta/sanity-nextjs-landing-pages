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
                  buildHookId: '5f9c49e8e9ae6200980d20ae',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nyzatgug',
                  apiId: '815540db-df56-4e84-be96-ebbcf50af982'
                },
                {
                  buildHookId: '5f9c49e809b50100e5e2feff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4wqpa5f8',
                  apiId: '992691a3-c04b-432f-8358-a46fc21f270a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gracecoletta/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4wqpa5f8.netlify.app', category: 'apps'}
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
