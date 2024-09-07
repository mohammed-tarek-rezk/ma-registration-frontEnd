import React from 'react'

function SubHeader(props) {
  return (
    <p className='-mt-6 text-center text-base text-gray-600' >{props.children}</p>
  )
}

export default SubHeader