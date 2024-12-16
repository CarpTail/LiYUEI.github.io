import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import {testSidebar} from "./sidebar.js";
import {transformUserConfigToPlugin} from "vuepress";

export default hopeTheme({
    hostname: "https://mister-hope.github.io",

    author: {
        name: "Mr.Li",
        url: "https://mister-hope.com",
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.png",

    // Git 仓库和编辑链接
    repo: "lolimen/lolimen.github.io",
    repoLabel: "GitHub",
    repoDisplay: true,

    docsDir: "docs",

    // fullscreen: true,

    // 导航栏
    navbar,
    navbarLayout:{
        start:["Brand"],
        center:["Links"],
        end:["Search", "Language", "Repo", "Outlook"],
    },

    // 侧边栏
    sidebar: testSidebar,

    // 页脚
    footer: "默认页脚",
    displayFooter: true,

    // 博客相关
    blog: {
        description: "一个开发者",
        intro: "/intro.html",
        avatar: "/logo3.png",
        medias: {
            // Baidu: "https://example.com",
            BiliBili: "https://www.bilibili.com/",
            // Bitbucket: "https://example.com",
            // Dingding: "https://example.com",
            // Discord: "https://example.com",
            // Dribbble: "https://example.com",
            // Email: "mailto:info@example.com",
            // Evernote: "https://example.com",
            // Facebook: "https://example.com",
            // Flipboard: "https://example.com",
            // Gitee: "https://example.com",
            GitHub: "https://github.com/",
            // Gitlab: "https://example.com",
            Gmail: "https://mail.google.com/mail",
            // Instagram: "https://example.com",
            // Lark: "https://example.com",
            // Lines: "https://example.com",
            // Linkedin: "https://example.com",
            // Pinterest: "https://example.com",
            // Pocket: "https://example.com",
            // QQ: "https://example.com",
            // Qzone: "https://example.com",
            // Reddit: "https://example.com",
            // Rss: "https://example.com",
            // Steam: "https://example.com",
            // Twitter: "https://example.com",
            // Wechat: "https://example.com",
            // Weibo: "https://example.com",
            // Whatsapp: "https://example.com",
            Youtube: "https://www.youtube.com/",
            Zhihu: "https://www.zhihu.com/",
            // VuePressThemeHope: {
            //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
            //   link: "https://theme-hope.vuejs.press",
            // },
        },
    },

    // 加密配置
    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {
        blog: true,

        // 启用之前需安装 @waline/client
        // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
        // comment: {
        //   provider: "Waline",
        //   serverURL: "https://waline-comment.vuejs.press",
        // },

        components: {
            components: [
                "Badge",        //多彩的徽章组件
                "BiliBili",     //嵌入 BiliBili 视频
                "CodePen",      //嵌入 CodePen 演示
                "SiteInfo",     //显示站点
                "PDF",          //嵌入 PDF 查看器
                "VPCard",       //一个卡片组件
            ],
        },

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
            align: true,
            attrs: true,
            // codetabs: true,
            component: true,
            demo: false,
            // figure: true,
            // imgLazyload: true,
            // imgSize: true,
            include: true,
            mark: true,
            markmap: true,
            plantuml: true,
            spoiler: true,
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
            // tabs: true,
            tasklist: true,
            vPre: true,

            // 在启用之前安装 chart.js
            // chart: true,

            // insert component easily

            // 在启用之前安装 echarts
            // echarts: true,

            // 在启用之前安装 flowchart.ts
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            // 在启用之前安装 katex
            // katex: true,

            // 在启用之前安装 mathjax-full
            // mathjax: true,

            // 在启用之前安装 mermaid
            // mermaid: true,

            // playground: {
            //   presets: ["ts", "vue"],
            // },

            // 在启用之前安装 reveal.js
            // revealJs: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },

            // 在启用之前安装 @vue/repl
            // vuePlayground: true,

            // install sandpack-vue3 before enabling it
            // sandpack: true,
        },

        // 自定义返回顶部按钮
        backToTop: {
            /**
             * 显示返回顶部按钮的滚动阈值距离（以像素为单位）
             *
             * @default 100
             */
            threshold: 500,
            /**
             * 是否显示滚动进度
             *
             * @default true
             */
            progress: true,
        },

        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cacheImage: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
},{ custom: true });
