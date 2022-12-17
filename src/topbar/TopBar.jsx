import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
    
      
    


  
      </div>
      <div className="topCenter">c
          <ul>
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem" >CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>

          
      </div>
      <div className="topRight">r
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
