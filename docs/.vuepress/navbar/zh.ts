import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    // "/",
    // {text: "博客", icon: "blog", link: "/"},

    // { "text": "分类", "link": "/category/", "icon": "categoryselected" },
    // { "text": "标签", "link": "/tag/", "icon": "tag" },
    // { "text": "时间轴", "link": "/timeline/", "icon": "time" },




    {
        text: "设计模式",
        icon: "note",
        prefix: "/_post/",
        children: [
            {
                text: "设计模式",
                icon: "note",
                prefix: "设计模式/",
                // link: "设计/软件设计概述.md",
                children: ["软件设计概述.md", "1.单例模式.md", "2.工厂模式.md",
                    "策略模式.md",
                    "抽象工厂模式.md",
                ],
            },
        ],


    },
    // {
    //   text: "V2 文档",
    //   icon: "note",
    //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
    // },


    {
        text: "官网导航",
        "icon": "message",
        children: [
            {text: 'reco主题文档', link: 'https://vuepress-theme-reco.recoluan.com/views/1.x/'},
            {text: 'VuePress中文网', link: 'https://www.vuepress.cn', target: '_blank'},
            {text: 'VuePress官网', link: 'https://vuepress.vuejs.org/zh/'},
            {text: 'Vue.js', link: 'https://cn.vuejs.org/', rel: ''},
            //
            {
                text: 'v1版本插件',
                link: 'https://github.com/vuepress/awesome-vuepress/blob/main/v1.md',
                "icon": "reco-github"
            },
            {text: 'v2主题', link: 'https://github.com/vuepress-aurora/vuepress-theme-aurora', "icon": "reco-github"},
            {text: 'reco主题官网', link: 'https://vuepress-theme-reco.recoluan.com'},
            {"text": "GitHub", "link": "https://github.com/recoluan", "icon": "reco-github"},
            {"text": "git-local", "link": "http://localhost:10086", "icon": "reco-github"},
            {text: 'mac软件-俄罗斯', link: 'https://appstorrent.ru/programs/'},


            {"text": "vuepress-theme-hope", icon: "note", "link": "https://vuepress-theme-hope.github.io/v2/zh/"},

            {"text": "mrhope", "link": "https://mrhope.site/"},
            {"text": "tobebetterjavaer", "link": "https://tobebetterjavaer.com"},
            {"text": "pnpm", "link": "https://pnpm.io/zh/installation"},
            {"text": "UTM虚拟机", "link": " https://mac.getutm.app"},
            {"text": "utm安装步骤", "link": "https://zhuanlan.zhihu.com/p/526352487"}


        ]
    },
]);
