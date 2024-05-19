module.exports = {
	title: 'リョウ トウ',
	description: 'Just playing around',
	plugins: [
		[
			'@vuepress/active-header-links',
			{
				sidebarLinkSelector: '.sidebar-link',
				headerAnchorSelector: '.header-anchor',
			},
		],
		'@vuepress/blog',
	],
	theme: 'vdoing',
	themeConfig: {
		smoothScroll: true,
		displayAllHeaders: true,
		sidebar: 'auto',
		logo: '/assets/img/logo.png',
		nav: [
			{ text: 'ホーム', link: '/' },
			{
				text: 'フロントエンド',
				link: '/frontend/',
				items: [
					{
						text: 'フロンエンドの文章',
						items: [
							{
								text: 'JavaScript',
								link: '/pages/a61298/',
							},
						],
					},
					{
						text: '学习笔记',
						items: [
							{
								text: '《JavaScript教程》',
								link: '/note/javascript/',
							},
							{
								text: '《JavaScript高级程序设计》',
								link: '/note/js/',
							},
							{ text: '《ES6 教程》', link: '/note/es6/' },
							{ text: '《Vue》', link: '/note/vue/' },
							{ text: '《React》', link: '/note/react/' },
							{
								text: '《TypeScript 从零实现 axios》',
								link: '/note/typescript-axios/',
							},
							{
								text: '《Git》',
								link: '/note/git/',
							},
							{
								text: 'TypeScript',
								link: '/pages/51afd6/',
							},
							{
								text: 'JS设计模式总结',
								link: '/pages/4643cd/',
							},
						],
					},
				],
			},
			{ text: 'ブログ', link: '/blog/demo/' },
			{ text: 'ITの単語', link: '/itWord/demo/' },
			{ text: 'ITのテスト', link: '/itWord/demo/' },
			{ text: '開発知識', link: '/development/demo/' },
			{
				text: '面接の質問',
				link: '/interview/react/',
				items: [
					{ text: 'React', link: '/interview/react/' },
					{ text: 'Vue', link: '/interview/vue/' },
					{ text: 'Java', link: '/interview/java/' },
				],
			},
			{
				text: 'Languages',
				ariaLabel: 'Language Menu',
				items: [
					{ text: 'Chinese', link: '/language/chinese/' },
					{ text: 'Japanese', link: '/language/japanese/' },
				],
			},
		],
		sidebar: {
			mode: 'structuring',
			collapsable: false,
		},
		sidebarOpen: true,
		/*
          sidebar: [
            {
                title: 'React',   // 必要的
                //path: '/interview/react/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/interview/react/',
                  '/interview/react-component/'
                ]
              },
              {
                title: 'Vue',
                children: [ /* ... *],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
              }

          ]
          */
	},
}
