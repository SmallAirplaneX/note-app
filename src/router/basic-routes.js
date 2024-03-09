export const basicRoutes = [
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/page/home/index.vue"),
        meta: {
            title: "Home",
        }
    },
    {
        path: "/data-manager",
        name: "DataManager",
        component: () => import("@/views/page/manage/index.vue"),
        redirect: { name: 'Attributes' },
        meta: {
            title: "数据管理",
        },
        children: [
            {
                path: "notes",
                name: "Notes",
                component: () => import("@/views/page/manage/notes/index.vue"),
                meta: {
                    title: "笔记管理",
                },
            },
            {
                path: "templates",
                name: "Templates",
                component: () => import("@/views/page/manage/templates/index.vue"),
                meta: {
                    title: "模板管理",
                },
            },
            {
                path: "attributes",
                name: "Attributes",
                component: () => import("@/views/page/manage/attributes/index.vue"),
                meta: {
                    title: "属性管理",
                },
            },
        ],
    }
];
