import LoginPage from 'containers/LoginPage';

const pagesRoutes = [
    { path: "/pages/login-page", name: "Login Page", short: "Login", mini: "LP", icon: "users_circle-08", component: LoginPage },
    { redirect: true, path: "/pages", pathTo: "/pages/login-page", name: "Login Page" }
];

export default pagesRoutes;
