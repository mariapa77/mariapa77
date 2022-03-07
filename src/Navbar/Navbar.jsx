import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../styles/colors';
import { Title } from '../styles/title';



const NavbarStyled = styled.div`
background-color: ${pizzaRed};
padding: 10px;
position: fixed;
width: 100%;
z-index:999;
display:flex;
justify-content: space-between;

`
const Logo = styled(Title)`
font-size:20px;
color: white;
Text-Shadow: 1px 1px 4px #584747;
`;

const UseState = styled.div`
color:white;
font-size:12px;
margin-right 30px;

`;

const LoginButton = styled.span`
cursor:poiner;
`;


export function Navbar ({login, loggedIn, logout}){
   return (
   <NavbarStyled>
       <Logo> 
           Giuseppes {" "} <span role = "img" aria-label="pizza slice">
            🍕
            Open 
            Mon - Fry  8 am to 8pm
            </span>
           </Logo>
           <UseState>
               {loggedIn !== 'loading' ? (
                   <>
                   👨‍💻 {loggedIn ? 'logged in.' : ""}
                   { loggedIn ? (
                       <LoginButton onClick={logout}>log out </LoginButton>
                   ) : (

                    <LoginButton onClick={login}>Log in / Sign up </LoginButton>

                   )}
                   </>

               ) : (
                   "loading..."
               )}
               
           </UseState>
       </NavbarStyled>
   );
   
}