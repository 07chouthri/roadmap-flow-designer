
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update document title
    document.title = "Page Not Found | HADS";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4 max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-hads-purple/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-hads-purple">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-hads-dark mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
          
          <Link to="/">
            <Button className="bg-hads-purple hover:bg-hads-purple/90 text-white">
              <Home size={18} className="mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
