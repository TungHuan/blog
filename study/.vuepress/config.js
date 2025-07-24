module.exports = {
  title: "dh 的记录博客",
  description: "分享学习、技术、生活",
  dest: 'docs',
  base: '/blog/',
  theme: 'reco',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '计算机基础', 
        items: [
          { text: '操作系统', link: '/计算机基础/操作系统' },
          { text: '计算机网络', link: '/计算机基础/计算机网络' },
          { text: '浏览器原理', link: '/计算机基础/浏览器原理' },
          { text: '设计模式', link: '/计算机基础/设计模式' },
        ]
      },
      { 
        text: '前端', 
        items: [
          { text: 'HTML基础', link: '/前端开发/HTML基础' },
          { text: 'CSS样式', link: '/前端开发/CSS样式' },
          { text: 'JavaScript', link: '/前端开发/JavaScript基础' },
          { text: 'ES6', link: '/前端开发/ES6' },
          { text: 'React', link: '/前端开发/React' },
        ]
      },
      { 
        text: '手撕代码', 
        items: [
          { text: '手撕 API', link: '/手撕代码/常见手写实现API' },
          { text: '力扣', link: '/手撕代码/力扣' },
          { text: '剑指 offer', link: '/手撕代码/剑指 offer' },
        ]
      },
    ],
    
    // 侧边栏配置
    sidebar: {






      '/计算机基础/操作系统': [
        {
          title: '操作系统',
          collapsable: false,
          children: [
            ['/操作系统/', '操作系统'],
            ['/操作系统/基础', '基础'],
          ]
        }
      ],

      '/操作系统/': [
        {
          title: '操作系统',
          collapsable: false,
          children: [
            ['/操作系统/', '操作系统'],
            ['/操作系统/基础', '基础'],
          ]
        }
      ],
      '/计算机基础/计算机网络': [
        {
          title: '计算机网络',
          collapsable: false,
          children: [
            ['/计算机网络/', '计算机网络'],
            ['/计算机网络/基础', '基础'],
          ]
        }
      ],

      '/计算机网络/': [
        {
          title: '计算机网络',
          collapsable: false,
          children: [
            ['', '概述'],
            ['基础', '基础'],
          ]
        }
      ],

      '/计算机基础/浏览器原理': [
        {
          title: '浏览器原理',
          collapsable: false,
          children: [
            ['/浏览器原理/', '浏览器原理'],
            ['/浏览器原理/基础', '基础'],
          ]
        }
      ],

      '/浏览器原理/': [
        {
          title: '浏览器原理',
          collapsable: false,
          children: [
            ['', '概述'],
            ['基础', '基础'],
          ]
        }
      ],
      '/计算机基础/设计模式': [
        {
          title: '设计模式',
          collapsable: false,
          children: [
            ['/设计模式/', '设计模式'],
            ['/设计模式/基础', '基础'],
          ]
        }
      ],

      '/设计模式/': [
        {
          title: '设计模式',
          collapsable: false,
          children: [
            ['', '概述'],
            ['基础', '基础'],
          ]
        }
      ],


      '/前端开发/HTML基础': [
        {
          title: 'HTML 基础',
          collapsable: false,
          children: [
            ['/HTML/', 'HTML 概述'],
            ['/HTML/BOM和DOM', 'BOM和DOM'],
          ]
        }
      ],
      '/HTML/': [
        {
          title: 'HTML 基础',
          collapsable: false,
          children: [
            ['', 'HTML 概述'],
            ['BOM和DOM', 'BOM和DOM'],
          ]
        }
      ],




      '/前端开发/CSS样式': [
        {
          title: 'CSS',
          collapsable: false,
          children: [
            ['/CSS/', 'CSS 概述'],
            ['/CSS/CSS选择器', 'CSS选择器'],
          ]
        }
      ],
      '/CSS/': [
        {
          title: 'CSS 基础',
          collapsable: false,
          children: [
            ['', 'CSS 概述'],
            ['CSS选择器', 'CSS选择器'],
          ]
        }
      ],

      '/前端开发/JavaScript': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            ['/JavaScript/', 'JavaScript'],
            ['/JavaScript/声明', '声明'],
          ]
        }
      ],
      '/JavaScript/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            ['', '概述'],
            ['声明', '声明'],
          ]
        }
      ],


      '/前端开发/ES6': [
        {
          title: 'ES6 相关知识点',
          collapsable: false,
          children: [
            ['/ES6/', '11111'],
            ['/ES6/声明方式', '声明方式'],
          ]
        }
      ],
      '/ES6/': [
        {
          title: 'ES6 相关知识点',
          collapsable: false,
          children: [
            ['', '11111'],
            ['声明方式', '声明方式'],
          ]
        }
      ],


      '/前端开发/React': [
        {
          title: 'React',
          collapsable: false,
          children: [
            ['/React/', 'React'],
            ['/React/基础', '基础'],
          ]
        }
      ],
      '/React/': [
        {
          title: 'React',
          collapsable: false,
          children: [
            ['', '概述'],
            ['基础', '基础'],
          ]
        }
      ],





      '/手撕代码/常见手写实现API': [
        {
          title: '常见手写实现API',
          collapsable: false,
          children: [
            ['/常见手写实现API/', '常见手写实现API'],
            ['/常见手写实现API/基础', '基础'],
          ]
        }
      ],

      '/常见手写实现API/': [
        {
          title: '常见手写实现API',
          collapsable: false,
          children: [
            ['', '概述'],
            ['基础', '基础'],
          ]
        }
      ],

      '/手撕代码/力扣': [
        {
          title: '力扣',
          collapsable: false,
          children: [
            ['/力扣/', '力扣 hot100'],
            ['/力扣/基础', '基础'],
          ]
        }
      ],


      '/力扣/': [
        {
          title: '力扣 hot100',
          collapsable: false,
          children: [
            ['', '概述'],
            ['基础', '基础'],
          ]
        }
      ],


      '/手撕代码/剑指 offer': [
        {
          title: '剑指 offer',
          collapsable: false,
          children: [
            ['/剑指 offer/', '剑指 offer'],
            ['/剑指 offer/基础', '基础'],
          ]
        }
      ],


      '/剑指 offer/': [
        {
          title: '剑指 offer',
          collapsable: false,
          children: [
            ['', '概述'],
            ['基础', '基础'],
          ]
        }
      ],



      '/学习笔记/': [
        {
          title: '学习笔记',
          collapsable: false,
          children: [
            ['', '概述'],
            ['学习心得', '学习心得'],
            ['技术总结', '技术总结'],
          ]
        }
      ],
      '/生活随笔/': [
        {
          title: '生活随笔',
          collapsable: false,
          children: [
            ['', '概述'],
            ['思考感悟', '思考感悟'],
            ['日常记录', '日常记录'],
          ]
        }
      ],
    },
    
    // 搜索配置
    search: true,
    searchMaxSuggestions: 10,
    
    // 作者信息
    author: 'dh',
    authorAvatar: '/avatar.jpg',
    
    // 备案信息
    record: '备案号',
    recordLink: '备案链接',
    
    // 开始时间
    startYear: '2024',
    
    // 友链
    friendLink: [
      {
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        email: 'contact@example.com',
        link: 'https://vuepress.vuejs.org/'
      },
      {
        title: 'VuePress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com/'
      }
    ]
  },
  
  // 插件配置
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom'],
    ['@vuepress/last-updated'],
    ['@vuepress/active-header-links'],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
};

