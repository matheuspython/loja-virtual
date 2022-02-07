import React, { useState } from 'react';

import { Container } from './styles';

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Container>
      <div className="container">
        <h1>seja bem vindo</h1>
        <nav className='menu'>
          <img 
            src="https://www.pngrepo.com/png/322481/512/hamburger-menu.png" 
            alt="menu"
            onClick={()=> setOpenMenu(!openMenu)}
          />
        </nav>
      </div>

      <nav className="desktop" style={{'display': openMenu ? 'block' : 'none'}}>
        <ul>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
        </ul>
      </nav>
    </Container>
  )
}
