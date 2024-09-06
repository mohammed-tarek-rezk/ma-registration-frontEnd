import React from 'react'

function Container(props) {
  return (
    <div className={`container m-auto px-4 ${props.className || ""} lg:max-w-screen-xl`}  >
        {props.children}
    </div>
  )
}

export default Container