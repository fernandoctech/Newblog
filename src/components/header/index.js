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
                            <li className="nav-item busca"><a href="#"><img src="https://img.icons8.com/ios/50/000000/google-web-search.png"/></a></li>
                            
                            
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;