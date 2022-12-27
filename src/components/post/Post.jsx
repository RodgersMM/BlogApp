import React from 'react'
import './post.css'
import Picture from '../../images/beach.jpg'



function Post() {
  return (
    <div className='post'>
  
           
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Core</span>
            <span className="postCat">RAN</span>
        </div>
          <span className="postTitle">Lorem ipsum dolor, sit amet adipisicing elit</span>
         <hr/>
         <img className='postImg' src= {Picture}/>
         <span className="postDate">1 hour ago</span>
         <p className='postDes'>Lorem,<code>oppo</code> ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis nihil placeat doloribus dolorem deleniti minus voluptatibus labore nam tenetur velit aliquam vel,
             rerum voluptatem similique incidunt atque, minima numquam?
             
             Lorem, <code>oppo</code> ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis nihil placeat doloribus dolorem deleniti minus voluptatibus labore nam tenetur velit aliquam vel,
             rerum voluptatem similique incidunt atque, minima numquam?
             
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis nihil placeat doloribus dolorem deleniti minus voluptatibus labore nam tenetur velit aliquam vel,
             rerum voluptatem similique incidunt atque, minima numquam?

             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis nihil placeat doloribus dolorem deleniti minus voluptatibus labore nam tenetur velit aliquam vel,
             rerum voluptatem similique incidunt atque, minima numquam?


             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis nihil placeat doloribus dolorem deleniti minus voluptatibus labore nam tenetur velit aliquam vel,
             rerum voluptatem similique incidunt atque, minima numquam?

             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis nihil placeat doloribus dolorem deleniti minus voluptatibus labore nam tenetur velit aliquam vel,
             rerum voluptatem similique incidunt atque, minima numquam?

             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis nihil placeat doloribus dolorem deleniti minus voluptatibus labore nam tenetur velit aliquam vel,
             rerum voluptatem similique incidunt atque, minima numquam?

             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis nihil placeat doloribus dolorem deleniti minus voluptatibus labore nam tenetur velit aliquam vel,
             rerum voluptatem similique incidunt atque, minima numquam?
             </p>
    </div>
 </div>
    
  );
}

export default Post;
