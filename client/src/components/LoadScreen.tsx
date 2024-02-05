import React from 'react'

const LoadScreen = () => {
  return (
    <div
    className='
    grid place-content-center 
    fixed top-0 bottom-0 left-0 right-0 z-50 bg-slate-400 bg-opacity-80
    
    '
    >
      <svg 
      width={400}
      version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
      <rect fill="none" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50">
      <animateTransform
        attributeName="transform"
        dur="0.5s"
        from="0 50 50"
        to="180 50 50"
        type="rotate"
        id="strokeBox"
        attributeType="XML"
        begin="rectBox.end"/>
      </rect>
      <rect x="27" y="27" fill="#fff" width="46" height="50">
      <animate
        attributeName="height"
        dur="1.3s"
        attributeType="XML"
        from="50" 
        to="0"
        id="rectBox" 
        fill="freeze"
        begin="0s;strokeBox.end"/>
      </rect>
    </svg>
    </div>
  )
}

export default LoadScreen