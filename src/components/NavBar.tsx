import React from 'react'

export const NavBar: React.FC = () =>
(
   <nav>
      <div className="nav-wrapper purple darken-2 px1">
         <a href="/" className="brand-logo">TODO List</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Список дел</a></li>
            <li><a href="/">Информация</a></li>
         </ul>
      </div>
   </nav>
)


