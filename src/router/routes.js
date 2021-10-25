import AuthMiddleware from "./Middleware/AuthMiddleware";
import HideForAuthMiddleware from "./Middleware/HideForAuthMiddleware";
import AdminShell from "../views/AdminShell.vue";
import multiguard from "vue-router-multiguard";
import VerifiedMiddleware from "./Middleware/VerifiedMiddleware";
import HideFromVerificationMiddleware from "./Middleware/HideFromVerificationMiddleware";

const routes = [
  {
    path: "/",
    name: "Admin",
    component: AdminShell,
    beforeEnter: multiguard([AuthMiddleware, VerifiedMiddleware]),
    children: [
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "/admins",
        name: "Admins",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Admins/Admins.vue"),
      },
      {
        path: "/create/admin",
        name: "CreateAdmin",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/Admins/CreateAdmin.vue"
          ),
      },
      {
        path: "/admins/trash",
        name: "admin-trash",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Admins/Trash.vue"),
      },
      {
        path: "/deans-list",
        name: "DeansList",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/DeansList.vue"),
      },
      {
        path: "/e-prospectus",
        name: "EProspectus",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/EProspectus.vue"),
      },
      {
        path: "/organization",
        name: "Organization",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Organization.vue"),
      },
      {
        path: "/faculty",
        name: "Faculty",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Faculty.vue"),
      },
      {
        path: "/settings",
        name: "Settings",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/Settings/Settings.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/Login.vue"),
    beforeEnter: HideForAuthMiddleware,
  },
  {
    path: "/verification",
    name: "Verification",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/Verification.vue"),
    beforeEnter: multiguard([AuthMiddleware, HideFromVerificationMiddleware]),
  },
];

export default routes;
