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
               {this.state.posts.map(post=>(
                   <article key={post.id}>
                        <div className="card">
                          <div className="card-header">
                            <h1>{post.title}</h1>
                          </div>
                          <div className="card-body">
                          <Link to={`/Post/${post.id}`} >Acessar</Link>
                          </div>
                        </div>
                   </article>
               ))}
            </div>
        );
    }
}