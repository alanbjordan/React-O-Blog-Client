import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BlogComment from './BlogComment';
import './blogs.css';

class BlogsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    } 

    async componentDidMount() {
        const data = await this.generateBlogs();
        this.setState({
          data
        });
      }
    
      generateBlogs = async () => {
        const url = "http://localhost:3000";
        fetch (url)
        .then(response => response.json())
        .then(jsondata => this.setState({
            data: jsondata
        })) 
        return this.state.data;
      };

    render() {
        if (this.state.data != 0) {
            const prop = this.props.match.params.user_post;
            const blogsData = this.state.data;
        return (
            <div className="blogPost">
                <h1>{blogsData[`${prop}`].title}</h1><br></br> <hr />
                <div className="textWrapper">
                    <h5 className="blogText">{blogsData[`${prop}`].blog_posts}</h5>                     
                </div>
                <Link to={`/posts/comments/${prop}`}>Read Comments</Link>
            </div>
        )
        } else {
            return <div>Loading data....</div>
        }
    }
}

export default BlogsList;