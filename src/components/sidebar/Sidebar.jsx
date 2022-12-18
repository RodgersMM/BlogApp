import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sideBarItem">
        <span className="sidebarTitle">ABOUT ME        </span>
        <p>Full Stack Developer</p>
       </div>
       <div className="sidebarItem">
         <span>CATEGORIES</span>
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
