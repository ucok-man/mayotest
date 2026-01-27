import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layouts/home.layout.tsx", [
    index("./pages/home.page.tsx"),

    ...prefix("/robux", [
      index("./pages/robux.page.tsx"),

      ...prefix("preorder", [
        index("./pages/robux-preorder.page.tsx"),
        route("/form", "./pages/robux-preorder-form.page.tsx"),
        route("/gamepass", "./pages/robux-preorder-gamepass.page.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
