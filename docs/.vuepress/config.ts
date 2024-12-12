import {getDirname, path} from "vuepress/utils";
import {defineUserConfig} from "vuepress";
import sakura from "vuepress-plugin-sakura"
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",

    title: "Mr.Li",
    description: "Mr.Li博客",
    theme,

    // 自定义logo
    head: [["link", {rel: "icon", href: "/logo3.png",}]],

    // 和 PWA 一起启用
    // shouldPrefetch: false,

    // alias: {
    //     "@theme-hope/modules/blog/components/BlogHero": path.resolve(
    //         __dirname,
    //         "./components/BlogHero.vue",
    //     ),
    // },

    plugins: [
        [
            sakura,
            {
                num: 20, // 默认数量
                show: true, // 是否显示
                zIndex: -1, // z-index
                img: {
                    replace: false, // 是否替换图片
                    httpUrl: "http://example.com/sakura.jpg" // 替换图片的URL
                }
            }
        ],
        [
            "vuepress-plugin-cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
    ]
});

