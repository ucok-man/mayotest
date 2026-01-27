// Navbar Component - Matching Laravel Blade version

export const Navbar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  //   // Prevent body scroll when menu is open
  //   if (!isMobileMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // };

  // return (
  //   <>
  //     <style>{`
  //       /* Override Bootstrap/Livewire styles untuk navbar - Tailwind first! */
  //       nav.mayoblox-navbar {
  //         box-sizing: border-box;
  //       }

  //       nav.mayoblox-navbar *,
  //       nav.mayoblox-navbar *::before,
  //       nav.mayoblox-navbar *::after {
  //         box-sizing: border-box;
  //       }

  //       /* Link styles */
  //       nav.mayoblox-navbar a {
  //         color: #FF7797 !important;
  //         text-decoration: none !important;
  //         cursor: pointer !important;
  //         display: inline-flex !important;
  //         align-items: center !important;
  //         font-family: 'Chillax', sans-serif !important;
  //         font-weight: 600 !important;
  //         transition: opacity 0.2s ease;
  //       }

  //       nav.mayoblox-navbar a:hover {
  //         opacity: 0.7;
  //       }

  //       /* SVG Icon styles */
  //       nav.mayoblox-navbar svg {
  //         display: inline-block !important;
  //         stroke: currentColor !important;
  //         fill: none !important;
  //         flex-shrink: 0;
  //       }

  //       nav.mayoblox-navbar button {
  //         cursor: pointer !important;
  //         background: transparent !important;
  //         border: none !important;
  //         padding: 0.5rem;
  //       }

  //       nav.mayoblox-navbar img {
  //         display: block;
  //         max-width: 100%;
  //         height: auto;
  //       }

  //       /* Sticky wrapper fix - Make navbar floating */
  //       .navbar-sticky-wrapper {
  //         position: fixed;
  //         top: 0;
  //         left: 0;
  //         right: 0;
  //         z-index: 9999;
  //         width: 100%;
  //         pointer-events: none;
  //       }

  //       .navbar-sticky-wrapper > div {
  //         pointer-events: none;
  //       }

  //       .navbar-sticky-wrapper > div > nav {
  //         pointer-events: all;
  //       }

  //       /* Mobile Menu Styles */
  //       .mobile-menu-overlay {
  //         position: fixed;
  //         top: 0;
  //         left: 0;
  //         right: 0;
  //         bottom: 0;
  //         background-color: rgba(0, 0, 0, 0.5);
  //         z-index: 9998;
  //         display: none;
  //         opacity: 0;
  //         transition: opacity 0.3s ease;
  //       }

  //       .mobile-menu-overlay.active {
  //         display: block;
  //         opacity: 1;
  //       }

  //       .mobile-menu-sidebar {
  //         position: fixed;
  //         top: 0;
  //         left: -100%;
  //         width: 80%;
  //         max-width: 300px;
  //         height: 100vh;
  //         background-color: #ffffff;
  //         z-index: 9999;
  //         transition: left 0.3s ease;
  //         box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  //         overflow-y: auto;
  //       }

  //       .mobile-menu-sidebar.active {
  //         left: 0;
  //       }

  //       .mobile-menu-header {
  //         padding: 1.5rem;
  //         border-bottom: 2px solid #FFE1E8;
  //         display: flex;
  //         justify-content: space-between;
  //         align-items: center;
  //       }

  //       .mobile-menu-items {
  //         padding: 1rem 0;
  //       }

  //       .mobile-menu-items a {
  //         display: block;
  //         padding: 1rem 1.5rem;
  //         color: #FF7797 !important;
  //         font-family: 'Chillax', sans-serif !important;
  //         font-weight: 600 !important;
  //         border-bottom: 1px solid #FFE1E8;
  //       }

  //       .mobile-menu-items a:hover {
  //         background-color: #FFF5F8;
  //       }

  //       /* Hide desktop menu on mobile */
  //       @media (max-width: 768px) {
  //         .desktop-menu {
  //           display: none !important;
  //         }

  //         .mobile-menu {
  //           display: flex !important;
  //         }

  //         nav.mayoblox-navbar {
  //           border-radius: 0 0 30px 30px !important;
  //           padding: 0.75rem 1rem !important;
  //           box-shadow: 0 8px 20px rgba(255, 119, 151, 0.15) !important;
  //         }
  //       }

  //       /* Hide mobile menu on desktop */
  //       @media (min-width: 769px) {
  //         .mobile-menu {
  //           display: none !important;
  //         }

  //         .desktop-menu {
  //           display: grid !important;
  //         }
  //       }
  //     `}</style>

  //     <div className="navbar-sticky-wrapper">
  //       <div className="container mx-auto px-6">
  //         <nav
  //           className="mayoblox-navbar"
  //           style={{
  //             maxWidth: "100%",
  //             backgroundColor: "#ffffff",
  //             borderRadius: "0 0 40px 40px",
  //             boxShadow: "0 14px 8px rgba(240, 135, 171, 0.1)",
  //             padding: "1rem 3rem",
  //           }}
  //         >
  //           {/* DESKTOP MENU */}
  //           <div
  //             className="desktop-menu"
  //             style={{
  //               display: "grid",
  //               gridTemplateColumns: "1fr auto 1fr",
  //               alignItems: "center",
  //               gap: "3rem",
  //             }}
  //           >
  //             {/* MENU KIRI */}
  //             <div
  //               style={{
  //                 display: "flex",
  //                 gap: "2.5rem",
  //                 alignItems: "center",
  //                 justifySelf: "start",
  //               }}
  //             >
  //               <Link
  //                 to="/robux"
  //                 style={{ fontWeight: "500", whiteSpace: "nowrap" }}
  //               >
  //                 Robux Gamepass
  //               </Link>
  //               <Link
  //                 to="/items"
  //                 style={{ fontWeight: "500", whiteSpace: "nowrap" }}
  //               >
  //                 Item Gamepass
  //               </Link>
  //               <Link
  //                 to="/games"
  //                 style={{ fontWeight: "500", whiteSpace: "nowrap" }}
  //               >
  //                 Game Lainnya
  //               </Link>
  //             </div>

  //             {/* LOGO TENGAH */}
  //             <div style={{ justifySelf: "center" }}>
  //               <Link to="/">
  //                 <img
  //                   src="/assets/images/logo.png"
  //                   alt="Logo Mayoblox"
  //                   style={{
  //                     height: "3.5rem",
  //                     width: "auto",
  //                     display: "block",
  //                   }}
  //                   onError={(e) => {
  //                     e.currentTarget.src =
  //                       "https://via.placeholder.com/140x56/FFE1E8/FF7797?text=Mayoblox";
  //                   }}
  //                 />
  //               </Link>
  //             </div>

  //             {/* ACTIONS KANAN */}
  //             <div
  //               style={{
  //                 display: "flex",
  //                 gap: "2rem",
  //                 alignItems: "center",
  //                 justifySelf: "end",
  //               }}
  //             >
  //               <Link
  //                 to="/robux-login"
  //                 style={{ fontWeight: "500", whiteSpace: "nowrap" }}
  //               >
  //                 Beli Robux Via Login
  //               </Link>
  //               <Link
  //                 to="/invoice"
  //                 style={{ fontWeight: "600", whiteSpace: "nowrap" }}
  //               >
  //                 Check Pesanan
  //               </Link>
  //               <Link
  //                 to="/carts"
  //                 style={{
  //                   display: "flex",
  //                   alignItems: "center",
  //                   color: "#FF7797",
  //                 }}
  //               >
  //                 <svg
  //                   className="w-7 h-7"
  //                   fill="none"
  //                   stroke="currentColor"
  //                   viewBox="0 0 24 24"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
  //                   />
  //                 </svg>
  //               </Link>
  //               <Link
  //                 to="/items"
  //                 style={{
  //                   display: "flex",
  //                   alignItems: "center",
  //                   color: "#FF7797",
  //                 }}
  //               >
  //                 <svg
  //                   className="w-7 h-7"
  //                   fill="none"
  //                   stroke="currentColor"
  //                   viewBox="0 0 24 24"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  //                   />
  //                 </svg>
  //               </Link>
  //             </div>
  //           </div>

  //           {/* MOBILE MENU */}
  //           <div
  //             className="mobile-menu"
  //             style={{
  //               display: "none",
  //               justifyContent: "space-between",
  //               alignItems: "center",
  //               padding: "0 0.5rem",
  //             }}
  //           >
  //             {/* Hamburger Menu */}
  //             <button
  //               onClick={toggleMobileMenu}
  //               style={{
  //                 background: "transparent",
  //                 border: "none",
  //                 cursor: "pointer",
  //                 padding: "0.75rem",
  //                 color: "#FF7797",
  //               }}
  //             >
  //               <svg
  //                 className="w-7 h-7"
  //                 fill="none"
  //                 stroke="currentColor"
  //                 viewBox="0 0 24 24"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={2}
  //                   d="M4 6h16M4 12h16M4 18h16"
  //                 />
  //               </svg>
  //             </button>

  //             {/* Logo */}
  //             <Link to="/">
  //               <img
  //                 src="/assets/images/logo.png"
  //                 alt="Logo Mayoblox"
  //                 style={{ height: "2.5rem", width: "auto", display: "block" }}
  //                 onError={(e) => {
  //                   e.currentTarget.src =
  //                     "https://via.placeholder.com/100x40/FFE1E8/FF7797?text=Mayoblox";
  //                 }}
  //               />
  //             </Link>

  //             {/* Right Icons */}
  //             <div
  //               style={{
  //                 display: "flex",
  //                 gap: "1.5rem",
  //                 alignItems: "center",
  //                 paddingRight: "0.75rem",
  //               }}
  //             >
  //               <Link to="/carts" style={{ color: "#FF7797" }}>
  //                 <svg
  //                   className="w-6 h-6"
  //                   fill="none"
  //                   stroke="currentColor"
  //                   viewBox="0 0 24 24"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
  //                   />
  //                 </svg>
  //               </Link>
  //               <Link to="/items" style={{ color: "#FF7797" }}>
  //                 <svg
  //                   className="w-6 h-6"
  //                   fill="none"
  //                   stroke="currentColor"
  //                   viewBox="0 0 24 24"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  //                   />
  //                 </svg>
  //               </Link>
  //             </div>
  //           </div>
  //         </nav>
  //       </div>
  //     </div>

  //     {/* Mobile Sidebar Menu */}
  //     <div
  //       className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
  //       onClick={toggleMobileMenu}
  //     />
  //     <div
  //       className={`mobile-menu-sidebar ${isMobileMenuOpen ? "active" : ""}`}
  //     >
  //       <div className="mobile-menu-header">
  //         <img
  //           src="/assets/images/logo.png"
  //           alt="Logo Mayoblox"
  //           style={{ height: "2rem", width: "auto" }}
  //           onError={(e) => {
  //             e.currentTarget.src =
  //               "https://via.placeholder.com/80x32/FFE1E8/FF7797?text=Mayoblox";
  //           }}
  //         />
  //         <button
  //           onClick={toggleMobileMenu}
  //           style={{
  //             background: "transparent",
  //             border: "none",
  //             cursor: "pointer",
  //             color: "#FF7797",
  //           }}
  //         >
  //           <svg
  //             className="w-7 h-7"
  //             fill="none"
  //             stroke="currentColor"
  //             viewBox="0 0 24 24"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M6 18L18 6M6 6l12 12"
  //             />
  //           </svg>
  //         </button>
  //       </div>
  //       <div className="mobile-menu-items">
  //         <Link to="/robux" onClick={toggleMobileMenu}>
  //           Robux Gamepass
  //         </Link>
  //         <Link to="/items" onClick={toggleMobileMenu}>
  //           Item Gamepass
  //         </Link>
  //         <Link to="/games" onClick={toggleMobileMenu}>
  //           Game Lainnya
  //         </Link>
  //         <Link to="/robux-login" onClick={toggleMobileMenu}>
  //           Beli Robux Via Login
  //         </Link>
  //         <Link to="/invoice" onClick={toggleMobileMenu}>
  //           Check Pesanan
  //         </Link>
  //       </div>
  //     </div>
  //   </>
  // );

  return <div></div>;
};
