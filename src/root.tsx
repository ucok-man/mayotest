/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router";
import "swiper/css/bundle";
import type { Route } from "./+types/root";
import RootErrorBoundary from "./components/error-boundary/root.error-boundary";
import RootLayout from "./components/layouts/root.layout";
import "./index.css";

export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    href: "/fonts/cherry-bomb-one/CherryBombOne-Regular.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/chillax/Chillax-Variable.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/jakarta-plus-sans/PlusJakartaSans-VariableFont_wght.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/jakarta-plus-sans/PlusJakartaSans-Italic-VariableFont_wght.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary(props: Route.ErrorBoundaryProps) {
  return <RootErrorBoundary {...props} />;
}
