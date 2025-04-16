
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import serviceItems from './ServiceItems';

interface DesktopNavProps {
  isActive: (path: string) => boolean;
  handleNavigation: (path: string, sectionId?: string) => void;
}

const DesktopNav = ({ isActive, handleNavigation }: DesktopNavProps) => {
  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link 
              to="/"
              onClick={() => handleNavigation('/')}
              className={cn("nav-link text-gray-800 hover:text-hads-pink px-4 py-2 transition-colors", 
                isActive('/') && "text-hads-pink font-medium"
              )}
            >
              Home
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link 
              to="/about"
              onClick={() => handleNavigation('/about')}
              className={cn("nav-link text-gray-800 hover:text-hads-pink px-4 py-2 transition-colors",
                isActive('/about') && "text-hads-pink font-medium"
              )}
            >
              About Us
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 text-gray-800 hover:text-hads-pink">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-6 w-[600px] bg-white shadow-xl border border-gray-100 rounded-xl">
                {serviceItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={cn(
                      "flex items-start p-3 rounded-lg transition-all duration-300 group",
                      isActive(item.path) 
                        ? "bg-gray-50 shadow-sm" 
                        : "hover:bg-gray-50 hover:shadow-sm"
                    )}
                  >
                    <div className={cn(
                      "flex items-center justify-center h-10 w-10 rounded-full mr-3 transition-colors",
                      isActive(item.path) 
                        ? "bg-hads-pink/10 text-hads-pink" 
                        : "bg-hads-teal/10 text-hads-teal group-hover:bg-hads-pink/10 group-hover:text-hads-pink"
                    )}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-sm font-medium transition-colors",
                        isActive(item.path) 
                          ? "text-hads-pink" 
                          : "text-hads-dark group-hover:text-hads-pink"
                      )}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link 
              to="/partners"
              onClick={() => handleNavigation('/partners')}
              className={cn("nav-link text-gray-800 hover:text-hads-pink px-4 py-2 transition-colors",
                isActive('/partners') && "text-hads-pink font-medium"
              )}
            >
              Partners
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link 
              to="/contact"
              onClick={() => handleNavigation('/contact')}
              className={cn("nav-link text-gray-800 hover:text-hads-pink px-4 py-2 transition-colors", 
                isActive('/contact') && "text-hads-pink font-medium"
              )}
            >
              Contact Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
