import ContentMobile from "./content-mobile";

export default function HomeNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 xl:px-0">
      <div className="overflow-hidden max-w-[1280px] mx-auto rounded-b-[24px] py-3 px-8 border border-navbar">
        <ContentMobile />
      </div>
    </nav>
  );
}
