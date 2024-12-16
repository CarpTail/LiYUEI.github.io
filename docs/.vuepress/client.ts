// 为项目主页的特性添加闪光效果
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";

// 为页面图标添加鼠标悬停的跳动效果
import "vuepress-theme-hope/presets/bounce-icon.scss";

import { defineClientConfig } from "vuepress/client";
import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.js";

export default defineClientConfig({
    setup() {
        setupSnowFall({
            count: 20,
            minSize: 10,
            maxSize: 25,
            speed: 2.0,
        });
    },
});