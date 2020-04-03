import React, { Component } from 'react';
import './blogs.css';

class BlogsComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    } 

    async componentDidMount() {
        this.generateBlogs();
      }
    
      generateBlogs = async () => {
          const commentId = this.props.match.params.user_comment;
          console.log("the props for comments 1 => ", commentId)
        const url = `http://localhost:3000/posts/comments/${commentId}`;
        fetch (url)
        .then(response => response.json())
        .then(jsondata => {
            this.setState({
                data: jsondata
            })
        }) 
        return this.state.data;
      };

    render() {      
        if (this.state.data != 0) {
        const prop = this.props.match.params.user_post;
        const blogsData = this.state.data;
        console.log("On the route blog data", blogsData[0].comment)
        return (
            <div className="blogPost">
                <h1>Comments</h1>
                <h4>{blogsData[0].comment}</h4><br></br> <hr />
            </div>
        )
        } else {
            return <div>Loading comments....</div>
        }
    }
}

export default BlogsComment;