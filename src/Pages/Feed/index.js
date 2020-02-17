import React, { Component } from  'react';
import './styles.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';

export default class Feed extends Component{
    state = {
        posts:[],
        destaks:[],
    
      }
      componentDidMount(){
        this.loadPosts();
        this.loadDestak();
      };
      loadPosts = async () => {
        const response = await api.get(`/feeds`);
    
        this.setState({ posts: response.data })
        console.log(response);
        
      };
      loadDestak = async () => {
        const response = await api.get(`/destak?_expand=feeds`);

        this.setState ({ destaks: response.data })
        console.log(response);
      }
    render( 
    ){
        return(
            <div className="Feed">
              
              {this.state.destaks.map(destak => (
                <article key={destak.feedsId}>
                  <div className="container destak">
                   <div className="destak-title">
                 
                     
                    <h1><Link to={`/Post/${destak.feedsId}`}>{destak.feeds.title}</Link></h1><br/>
                    </div>
                 <div className="destak-img">
                  <img src={destak.feeds.img} /> 
                </div>

                
                </div>
                </article>
               
                  ))}

                
                

              
              
              <div className="container-post">
                <div className="post-feed">
                {this.state.posts.map(post =>(
                  <article key={post.id}>
                  <Link to={`/Post/${post.id}`}>
                  <div className="card-post">
                    <img src={post.img} />
                    <div className="text-overlay">
                      <h2>{post.title}</h2>
                     <p>{post.desc}</p>
                     <strong>author</strong>
                    </div>
                    
                  </div></Link>
                  
                  </article>
                  ))}
                  
                  
                  
                </div>
              </div>
              
            </div>
        );
    }
}