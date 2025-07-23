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
          { text: '数据结构', link: '/计算机基础/数据结构' },
          { text: '算法基础', link: '/计算机基础/算法基础' },
          { text: '操作系统', link: '/计算机基础/操作系统' },
          { text: '计算机网络', link: '/计算机基础/计算机网络' },
        ]
      },
      { 
        text: '大前端', 
        items: [
          { text: 'HTML基础', link: '/前端开发/HTML基础' },
          { text: 'CSS样式', link: '/前端开发/CSS样式' },
          { text: 'JavaScript基础', link: '/前端开发/JavaScript基础' },
          { text: 'Vue.js学习', link: '/前端开发/Vue.js学习' },
          { text: 'React学习', link: '/前端开发/React学习' },
          { text: '设计模式', link: '/前端开发/设计模式' },
        ]
      },
      // { 
      //   text: '面试', 
      //   items: [
      //     { text: '前端面试', link: '/面试/前端面试' },
      //     { text: '算法面试', link: '/面试/算法面试' },
      //     { text: '系统设计', link: '/面试/系统设计' },
      //   ]
      // },
      { 
        text: '手撕代码', 
        items: [
          { text: '手撕 API', link: '/手撕代码/常见手写实现 API' },
          { text: '力扣 hot100', link: '/手撕代码/力扣' },
          { text: '剑指offer', link: '/手撕代码/剑指offer' },
        ]
      },
      {
        text:'生活随笔',
        items:[
          { text: '日常记录', link: '/生活随笔/日常记录' },
          { text: '思考感悟', link: '/生活随笔/思考感悟' },
        ]
      },
      { text: '线上作品', link: '/线上作品/' },
      { text: '关于我', link: '/关于我/' },
    ],
    
    // // 侧边栏配置
    // sidebar: {
    //   '/算法与数据结构/': [
    //     {
    //       title: '算法与数据结构',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['基础算法', '基础算法'],
    //         ['数据结构', '数据结构'],
    //         ['高级算法', '高级算法'],
    //       ]
    //     }
    //   ],
    //   '/操作系统/': [
    //     {
    //       title: '操作系统',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['进程管理', '进程管理'],
    //         ['内存管理', '内存管理'],
    //         ['文件系统', '文件系统'],
    //       ]
    //     }
    //   ],
    //   '/计算机网络/': [
    //     {
    //       title: '计算机网络',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['网络协议', '网络协议'],
    //         ['HTTP详解', 'HTTP详解'],
    //         ['网络安全', '网络安全'],
    //       ]
    //     }
    //   ],
    //   '/设计模式/': [
    //     {
    //       title: '设计模式',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['创建型模式', '创建型模式'],
    //         ['结构型模式', '结构型模式'],
    //         ['行为型模式', '行为型模式'],
    //       ]
    //     }
    //   ],
    //   '/剑指offer/': [
    //     {
    //       title: '剑指offer',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['数组', '数组'],
    //         ['字符串', '字符串'],
    //         ['链表', '链表'],
    //         ['树', '树'],
    //         ['动态规划', '动态规划'],
    //       ]
    //     }
    //   ],
    //   '/计算机基础/': [
    //     {
    //       title: '计算机基础',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['数据结构', '数据结构'],
    //         ['算法基础', '算法基础'],
    //         ['操作系统', '操作系统'],
    //         ['计算机网络', '计算机网络'],
    //       ]
    //     }
    //   ],
    //   '/前端开发/': [
    //     {
    //       title: '前端开发',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['HTML基础', 'HTML基础'],
    //         ['CSS样式', 'CSS样式'],
    //         ['JavaScript基础', 'JavaScript基础'],
    //         ['Vue.js学习', 'Vue.js学习'],
    //         ['React学习', 'React学习'],
    //       ]
    //     }
    //   ],
    //   '/面试/': [
    //     {
    //       title: '面试',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['前端面试', '前端面试'],
    //         ['算法面试', '算法面试'],
    //         ['系统设计', '系统设计'],
    //       ]
    //     }
    //   ],
    //   '/手撕代码/': [
    //     {
    //       title: '手撕代码',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['算法实现', '算法实现'],
    //         ['数据结构', '数据结构'],
    //         ['设计模式', '设计模式'],
    //       ]
    //     }
    //   ],
    //   '/学习笔记/': [
    //     {
    //       title: '学习笔记',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['学习心得', '学习心得'],
    //         ['技术总结', '技术总结'],
    //       ]
    //     }
    //   ],
    //   '/生活随笔/': [
    //     {
    //       title: '生活随笔',
    //       collapsable: false,
    //       children: [
    //         ['', '概述'],
    //         ['日常记录', '日常记录'],
    //         ['思考感悟', '思考感悟'],
    //       ]
    //     }
    //   ]
    // },
    
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

