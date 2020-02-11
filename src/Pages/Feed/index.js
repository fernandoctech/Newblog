import React, { Component } from  'react';
import './styles.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';

export default class Feed extends Component{
    state = {
        posts:[],
    
      }
      componentDidMount(){
        this.loadPosts();
      };
      loadPosts = async () => {
        const response = await api.get(`/feed`);
    
        this.setState({ posts: response.data })
        console.log(response);
      };
    render( 
    ){
        return(
            <div className="Feed">
              <div className="container">
                <div className="destak-title">
                    <h1><a href="#">NodeJs e Suas <br/> Riquesas</a> </h1><br/>
                    
                </div>
                <div className="destak-img">
                  <img src="https://i.ibb.co/RzxcCGw/Black-Circle-with-Utensils-Restaurant-Logo-1.png" />
                </div>
              </div>
               
            </div>
        );
    }
}