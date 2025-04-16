
import { cn } from "@/lib/utils";
import NavLogo from "./navbar/NavLogo";
import DesktopNav from "./navbar/DesktopNav";
import NavActions from "./navbar/NavActions";
import useNavbar from "./navbar/useNavbar";

const Navbar = () => {
  const {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isVisible,
    isActive,
    handleNavigation,
  } = useNavbar();

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-black/20 backdrop-blur-md"
          : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <NavLogo />
          <DesktopNav
            isActive={isActive}
            handleNavigation={handleNavigation}
          />
          <NavActions
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            handleNavigation={handleNavigation}
            isActive={isActive}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
