import React from 'react'
import './single.css'
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from '../../singlepost/SinglePost'

function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
      
    </div>
  )
}

export default Single
