import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBNavbarLink,
  MDBNavbarItem,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import C from './C.png'


export default function Navbar() {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
     <MDBNavbar light bgColor='light'>
  <MDBContainer>
    <MDBNavbarBrand>
      <h3 style={{ color: '#FB7979'}} onClick={handleLogoClick}> The Cupid Calculator </h3>
    </MDBNavbarBrand>
    <MDBInputGroup tag="text" className='d-flex w-auto mb-3'>
        <MDBNavbarLink href='/About' className="navbar-link mx-4" style={{ textDecoration: 'none', lineHeight: '75px', margin: '0', fontSize: '22px' }}> About</MDBNavbarLink>
      <a href='https://clairesacuto-portfolio.vercel.app'>
        <img 
          src={C} 
          height='75'
          alt='LogoClaire'
          loading='lazy'
        />
      </a>
    </MDBInputGroup>
  </MDBContainer>
</MDBNavbar>
    </>
  );
}
