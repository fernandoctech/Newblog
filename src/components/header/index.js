import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


class Header extends Component{
    render(){
        return(
            <header>
                <nav className="navbar">
                    <div className="nav-logo">
                        <a href="/"><h1>Logo NewBlog</h1></a>
                    </div>
                    <div className="nav-navbar">
                        <ul className="list-nav">
                            <li className="nav-item"><a href="#">Categorias</a></li>
                            <li className="nav-item"><a href="#">Equipe</a></li>
                            
                            
                            
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;