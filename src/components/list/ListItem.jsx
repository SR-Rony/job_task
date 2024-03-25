import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({text,className,to}) => {
  return (
    <li className={className}><Link to={to}>{text}</Link></li>
  )
}

export default ListItem