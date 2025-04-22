import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login", "./login/login.tsx"),
    route("reset", "./login/reset.tsx"), 
    route("income", "./login/income.tsx"),
    route("expense", "./login/expense.tsx"),

] satisfies RouteConfig;
