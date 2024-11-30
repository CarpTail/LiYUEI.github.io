const sidebarWeb: object = {
    "/05.Web技术/": [
        {
            text: "HTTP",
            icon: "/assets/icon/icons8-http-24.png",
            prefix: "HTTP/",
            collapsible: true,
            children: "structure"
        },
        {
            text: "用户界面",
            icon: "fa-solid fa-users",
            prefix: "Interface/",
            collapsible: true,
            children: [
                {
                    text: "React",
                    icon: "/assets/icon/icons8-react-24.png",
                    prefix: "React/",
                    collapsible: true,
                    children: "structure"
                },
                {
                    text: "VUE",
                    icon: "/assets/icon/icons8-vue-js-24.png",
                    prefix: "VUE/",
                    collapsible: true,
                    children: "structure"
                },
            ]
        },
        {
            text: "REST API",
            icon: "/assets/icon/icons8-rest-api-24.png",
            prefix: "REST API/",
            collapsible: true,
            children: "structure"
        },
        {
            text: "其他",
            icon: "fa-solid fa-bars",
            prefix: "其他/",
            collapsible: true,
            children: "structure"
        }
    ]
};

export {
    sidebarWeb
};
