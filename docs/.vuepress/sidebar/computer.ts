

const sidebarComputer : object = {
    "/01.计算机基础/" : [
        {
            text: "操作系统",
            icon: "fa-brands fa-windows",
            prefix: "操作系统/",
            collapsible: true,
            children: "structure"
        },
        {
            text: "数据结构和算法",
            icon: "fa-solid fa-hexagon-nodes",
            prefix: "数据结构和算法/",
            collapsible: true,
            children: "structure"
        },
        {
            text: "计算机网络",
            icon: "fa-solid fa-network-wired",
            prefix: "计算机网络/",
            collapsible: true,
            children: "structure"
        },
    ]
};

export {
    sidebarComputer
};