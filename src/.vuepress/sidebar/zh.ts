import {sidebar} from "vuepress-theme-hope";


export const zhSidebar = sidebar({
    "/": [
        "",

        {
            text: "文章",
            icon: "note",
            prefix: "_post/",
            children: "structure",
        },
    ],
    "/guide/": [
        "",
        {
            text: "文档",
            icon: "note",
            prefix: "guide/",
            children: "structure",
        }
        ],
    "/_post/": [
        {
            text: "设计模式",
            icon: "note",
            prefix: "设计模式/",
            children: "structure",
        },

    ]
    ,
});
