
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import GetProtectedDialog from "@/components/GetProtectedDialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNav from "./MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavActionsProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleNavigation: (path: string, sectionId?: string) => void;
  isActive: (path: string) => boolean;
}

const NavActions = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  handleNavigation,
  isActive 
}: NavActionsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center space-x-3">
      <div className="hidden md:block">
        <GetProtectedDialog />
      </div>
      
      {/* Mobile menu trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border border-gray-200"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-5 w-5 text-gray-800" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0 w-full sm:max-w-md">
          <MobileNav 
            isOpen={true}
            setIsOpen={setIsMobileMenuOpen}
            isActive={isActive}
            handleNavigation={handleNavigation}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavActions;
