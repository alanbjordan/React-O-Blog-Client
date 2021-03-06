import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom';

class BlogsList extends Component {
    constructor() {
        super();
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
        console.log(this.state.data)
        if (this.state.data != 0) {
        const blogsData = this.state.data;

        return (
            <div>
                <ul>
                    {blogsData.map(element => (
                        console.log(element.id),
                        <div key={element.id}>{element.title} <br></br>
                        <Link to={`/posts/${element.id}`}>Read Post</Link>
                        </div>
                    ))}
                </ul>
            </div>
        )
        } else {
            return <div>Loading data....</div>
        }
    }
}

export default BlogsList;