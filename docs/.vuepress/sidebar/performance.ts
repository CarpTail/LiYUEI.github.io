import {sidebar} from "vuepress-theme-hope";

const sidebarPeformance: object = {
    "/06.高性能/": [
        {
            text: "CUDA",
            icon: "/assets/icon/icons8-nvidia-24.png",
            prefix: "CUDA/",
            collapsible: true,
            children: "structure"
        },
        {
            text: "MPI",
            icon: "/assets/icon/open-mpi-logo.png",
            prefix: "MPI/",
            collapsible: true,
            children: "structure"
        },
        {
            text: "OpenMP",
            icon: "/assets/icon/icons8-mp-24.png",
            prefix: "OpenMP/",
            collapsible: true,
            children: "structure"
        },
        {
            text: "性能优化",
            icon: "/assets/icon/icons8-performance-24.png",
            prefix: "性能优化/",
            collapsible: true,
            children: "structure"
        },
    ]
};

export {
    sidebarPeformance
};