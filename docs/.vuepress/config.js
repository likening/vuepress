module.exports = {
    title: '黎科宁-码出世界',
    description: 'PHP,JAVA,PYTHON',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    base: '/vuepress/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '面试突击',
              items: [
                { text: '消息队列', link: '/mq/' },
                { text: '分布式', link: '/ios/' },
                { text: 'Web', link: '/web/' }
              ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/codeteenager' },
        ],
        sidebar: {
            '/mq/': [
                        {
                            title: '设计原则',
                            collapsable: false,
                            children: [
                                ['/mq/001.md','MQ选择']
                            ]
                        }
                ]
            },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
}
