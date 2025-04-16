
import { useEffect } from 'react';
import CloudMigrationPage from './CloudMigrationPage';

export default function CloudMigration() {
  useEffect(() => {
    // Update document title when the component mounts
    document.title = "HADS - Cloud Migration & Consulting";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return <CloudMigrationPage />;
}
