import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick}) => {
  if(active) {
    return <button className='active' onClick={e => { e.preventDefault(); onClick() }}  > {children} </button>
  }

  return (
    <button onClick={e => { e.preventDefault(); onClick() }}  > {children} </button>
  )
}

export default Link