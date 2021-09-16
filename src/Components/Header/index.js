import React from "react";

const Header = ( { user } ) => (
  
  <header>
    <img src= {user.avatar_url}   className="imagen" />
    <h1>{user.name}</h1> 
    <h1 className="title">Repositorios publicos no GitHub <b className='repos_public'> {user.public_repos}</b> </h1>
    
  </header>
);

export default Header;
