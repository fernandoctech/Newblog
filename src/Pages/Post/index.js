import React, { Component } from "react";
import './styles.css';
import api from '../../services/api';
const headers = { Accept: "application/vnd.github.v3.json" };


export default class Post extends Component{
    state = {
        content: null,
        post: {},
        list:{},
        
      };
      fetchData() {
        return this.fetchGistMarkdownUrl(this.state.post.id)
          .then(this.fetchGistMarkdownText)
          .then(this.fetchRenderedMarkdown);
      }
    
      fetchGistMarkdownUrl(id) {
        return fetch(`https://api.github.com/gists/${id}`, { headers })
          .then(response => response.json())
          .then(json => Object.values(json.files)[0].raw_url);
      }
    
      fetchGistMarkdownText(rawUrl) {
        return fetch(rawUrl).then(response => response.text());

      }
    
      fetchRenderedMarkdown(text) {
        return fetch("https://api.github.com/markdown", {
          headers,
          method: "POST",
          body: JSON.stringify({ text }),
        }).then(response => response.text());
      }
    
    
      async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/feed/${id}`);
    
        this.setState({ post: response.data , list: response.data});
        console.log(response);
        this.fetchData().then(content => this.setState({ content }));
    
      }
    render() {
        const { content } = this.state;
        return(
            <div className="Post">
                <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
            </div>
        );
    }
}