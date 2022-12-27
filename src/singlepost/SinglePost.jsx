import React from 'react'
import './singlepost.css'
import Picture from '../images/beach.jpg'

function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src= {Picture} alt="" className="singlePostImage" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </h1>
        <div className="singlePostEdit">
           <i class="fa fa-pencil" aria-hidden="true"></i>
           <i class="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default SinglePost





