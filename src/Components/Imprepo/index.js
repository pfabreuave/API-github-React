import React from "react";

const Imprepo = ({ repos }) => (
    <div className='repoListContainer'>
    {repos.map(repo => (
    <a href={repo.html_url} key={repo.id}  className='card'>  <span>{repo.name}</span></a>
    ))}
</div>
);

export default Imprepo;