import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "技术栈",
        icon: "book",
        link: "/code_articles/",
    },
    {
        text: "分类",
        icon: "fa-solid fa-list",
        prefix: "/",
        children: [
            {
                text: "计算机基础",
                icon: "fa-solid fa-computer",
                link: "01.计算机基础/",
                // children: [
                //     // {text: "苹果1", icon: "pen-to-square", link: "1"},
                //     // {text: "苹果2", icon: "pen-to-square", link: "2"},
                // ],
            },
            {text: "编程语言", icon: "/assets/icon/icons8-c++-48.png", link: "02.编程语言/"},
            {text: "工具使用", icon: "fa-solid fa-screwdriver-wrench", link: "03.工具使用/"},
            {text: "代码库研究", icon: "fa-brands fa-github", link: "04.代码库研究/"},
            {text: "Web技术", icon: "fa-solid fa-globe", link: "05.Web技术/"},
            {text: "高性能", icon: "fa-solid fa-chart-line", link: "06.高性能/"},
            {text: "其他", icon: "fa-solid fa-bars", link: "其他/"}
            // {
            //     text: "香蕉",
            //     icon: "pen-to-square",
            //     prefix: "banana/",
            //     children: [
            //         {
            //             text: "香蕉 1",
            //             icon: "pen-to-square",
            //             link: "1",
            //         },
            //         {
            //             text: "香蕉 2",
            //             icon: "pen-to-square",
            //             link: "2",
            //         },
            //     ],
            // },
            // {text: "樱桃", icon: "pen-to-square", link: "cherry"},
            // {text: "火龙果", icon: "pen-to-square", link: "dragonfruit"},
        ],
    },
    {
        text: "笔记",
        icon: "fa-solid fa-note-sticky",
        link: "/article/",
    },
    {
        text: "随笔",
        icon: "/assets/icon/light-bulb.png",
        link: "/10.随笔短记/",
    },
]);