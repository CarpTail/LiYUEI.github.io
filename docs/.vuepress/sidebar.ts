import {sidebar} from "vuepress-theme-hope";

import {sidebarComputer} from "./sidebar/computer.js";
import {sidebarLang} from "./sidebar/language.js";
import {sidebarUtils} from "./sidebar/utils.js";
import {sidebarRepos} from "./sidebar/repos.js";
import {sidebarWeb} from "./sidebar/web.js";
import {sidebarPeformance} from "./sidebar/performance.js";
import {sidebarNote} from "./sidebar/note.js";

// siderBar由各个不同的分类组成
export const testSidebar = sidebar({
        ...sidebarComputer,
        ...sidebarLang,
        ...sidebarUtils,
        ...sidebarRepos,
        ...sidebarWeb,
        ...sidebarPeformance,
        ...sidebarNote,
    }
);
