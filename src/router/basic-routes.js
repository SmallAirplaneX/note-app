export const basicRoutes = [
    {
        path: "/",
        name: "",
        component: () => import("@/views/page/home/index.vue"),
        meta: {
            title: "无状态",
        }
    },
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
        component: () => import("@/views/layout/index.vue"),
        meta: {
            title: "数据管理",
        },
        children: [
            {
                path: "home",
                name: "DataHome",
                component: () => import("@/views/page/home/index.vue"),
                meta: {
                    title: "Home",
                }
            },
            {
                path: "objects",
                name: "Objects",
                component: () => import("@/views/page/manage/object/index.vue"),
                meta: {
                    title: "对象管理",
                },
            },
            {
                path: "templates",
                name: "Templates",
                component: () => import("@/views/page/manage/template/index.vue"),
                meta: {
                    title: "模板管理",
                },
            },
            {
                path: "attributes",
                name: "Attributes",
                component: () => import("@/views/page/manage/concept/index.vue"),
                meta: {
                    title: "属性管理",
                },
            },
            {
                path: "note",
                name: "Note",
                component: () => import("@/views/page/note/index.vue"),
                meta: {
                    title: "创建笔记",
                },
            },
        ],
    },

    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/page/user/login/index.vue"),
        meta: {
            title: "登陆",
        },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("@/views/page/user/register/index.vue"),
        meta: {
            title: "注册",
        },
    },
    {
        path: "/user",
        name: "User",
        component: () => import("@/views/page/user/index.vue"),
        meta: {
            title: "个人页",
        },
    },
];
