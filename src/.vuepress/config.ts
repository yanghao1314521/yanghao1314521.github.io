import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {searchPlugin} from "@vuepress/plugin-search";
export default defineUserConfig({
    title: "Java知识体系", //网站名称
    description: "用心写代码，不辜负程序员之名", //网站描述
    base: "/",
    dest: "./dist/",
    host: "0.0.0.0",
    port: 8080,
    open: false,

    locales: {
        "/": {
            lang: "zh-CN",
            title: "Java知识体系",
            description:
                "包含: Java 基础, Java 部分源码, JVM, Spring, Spring Boot, Spring Cloud, 数据库原理, MySQL, ElasticSearch, MongoDB, Docker, k8s, CI&CD, Linux, DevOps, 分布式, 中间件, 开发工具, Git, IDE, 源码阅读，读书笔记, 开源项目...",
        },
    },
    head: [
        // ico
        // ["link", { rel: "icon", href: `/imgs/clubs.png` }],
        // ["link", { rel: "icon", href: `/imgs/clubs_favicon.ico` }],
        ["link", {rel: "icon", href: '/icons/icon.ico'}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "yanghao1314521"}],
        [
            "meta",
            {
                name: "keywords",
                content:
                    "Java 知识体系, java体系, java知识体系, java框架,java详解,java学习路线,java spring, java面试, 知识体系, java技术体系, java编程, java编程指南,java开发体系, java开发,java教程,java,java数据结构, 算法, 开发基础",
            },
        ],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
    ],

    theme,

    shouldPrefetch: false,

    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
            },
        }),
        // viteCommonjs(),
        // esbuildCommonjs(["markdown-it-disable-url-encode"])
    ],
});
