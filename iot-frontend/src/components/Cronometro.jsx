import React, { useEffect } from 'react'

export const Cronometro = ({diff=0, setDiff}) => {

  useEffect(() => {
      const interval = setInterval(() => {
          setDiff(diff + 1);
      }, 60000);
      // console.log(diff);
      return () => clearInterval(interval);
  },[diff])
    
  return (
    <>
      <span>{diff} min. </span>
    </>
  )
}