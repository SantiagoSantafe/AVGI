import { useEffect } from 'react';

function ScrollToTop() {
  

    useEffect(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100); 
      }, []); 

  return null;
}

export default ScrollToTop;