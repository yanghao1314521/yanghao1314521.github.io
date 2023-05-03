import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar";
import {zhSidebar} from "./sidebar";

export default hopeTheme({
    hostname: "https://yanghao1314521.github.io/",

    author: {
        name: "yanghao",
        url: "https://yanghao1314521.github.io/",
    },
    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },
    fullscreen: true,

    iconAssets: "iconfont",

    logo: "/assets/icons/icon.png",

    repo: "yanghao1314521/yanghao1314521.github.io",

    docsDir: "_post",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    blog: {
        name: "一只小肥杨",
        ///头像
        avatar: "avatar.png",
// 圆角
        roundAvatar: true,
//座右铭
        description: "一个后端开发者",
        //介绍页
        intro: "/intro.html",
        medias: {
            BiliBili: "https://example.com",
            Gitee: "https://gitee.com",
            GitHub: "https://github.com",
            Zhihu: "https://www.zhihu.com",
        },
    },
    locales: {

        /**
         * Chinese locale config
         */
        "/": {
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,
            // sidebar: "auto",

            footer: "默认页脚",

            displayFooter: true,
            // blog: {

            // },
            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
    },

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
            "/zh/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
        // 启用博客自动摘要
        blog: {
            autoExcerpt: true,
        },
//复制代码
        copyCode: {},
        //图片预览
        photoSwipe: {},
        // md增强功能
        // Disable features you don’t want here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            //启用图片懒加载
            imageLazyload: true,
//启动图片标记
            imageMark: true,
            // 启用图片标题
            imageTitle: true,
            // 启用图片大小
            imageSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            // 添加选项卡支持
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },

        pwa: {
            favicon: "/assets/icons/icon.ico",
            cacheHTML: true,
            cachePic: true,
            appendBase: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Demo",
                        short_name: "Demo",
                        url: "/demo/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
});
