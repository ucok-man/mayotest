import { Outlet } from "react-router";
import { Footer } from "./home.footer";
import { Navbar } from "./home.navbar";

export default function HomeLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
