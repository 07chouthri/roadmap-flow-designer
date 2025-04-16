
import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    checkSize()
    
    // Add event listener
    window.addEventListener("resize", checkSize)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return !!isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
    }
    
    // Initial check
    checkSize()
    
    // Add event listener
    window.addEventListener("resize", checkSize)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return !!isTablet
}

export function useResponsiveSize() {
  const [size, setSize] = React.useState<'mobile' | 'tablet' | 'desktop' | undefined>(undefined)

  React.useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        setSize('mobile')
      } else if (width < TABLET_BREAKPOINT) {
        setSize('tablet')
      } else {
        setSize('desktop')
      }
    }
    
    // Initial check
    checkSize()
    
    // Add event listener
    window.addEventListener("resize", checkSize)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return size
}
