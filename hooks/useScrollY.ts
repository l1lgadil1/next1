import React from 'react'

export const useScrollY = () =>{
  const isBrowser = typeof window !== 'undefined';

  const [scrollY,setScrollY] = React.useState<number>(0);

  const handleScroll = () =>{
    const currentY = isBrowser ? window.scrollY : 0;
    setScrollY(currentY);
  }

  React.useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return scrollY;
}