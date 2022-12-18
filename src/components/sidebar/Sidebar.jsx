import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <p>I'm a Full Stack Developer & Digital Marketer</p>
       </div>
       <div className="sidebarItem">
         <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">National</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Official</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebaSocial">
             <i className="sidebarIcon fa-brands fa-facebook"></i>
             <i className="sidebarIcon fa-brands fa-twitter"></i>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
