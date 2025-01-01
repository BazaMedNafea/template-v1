import { ReactNode } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

interface LayoutProps {
  children: ReactNode;
  hideNavbar?: boolean; // Optional prop to control Navbar visibility
}

const Layout = ({ children, hideNavbar = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col">
      {/* Conditionally hide the Navbar */}
      {!hideNavbar && <Navbar />}

      {/* Main Content */}
      <main className="flex-grow p-4 container mx-auto">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
