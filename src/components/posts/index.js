import React, {Component} from 'react';
import axios from './../../axios-config';
import './posts.scss';

class Posts extends Component{
  state={
    posts: [],
    filteredPosts: [],
  }

  componentDidMount() {
    this.getPosts();
  }
  
  getPosts = () => {
    axios.get('posts').then((res) => { 
      this.setState({posts: res.data, filteredPosts: res.data});
    });
  }

  filterPosts = (e) => {
    const { posts } = this.state;
    const filterKey = e.target.value;
    const filtered = posts.filter(post => post.title.indexOf(filterKey) !== -1);
    this.setState({filteredPosts: filtered});
  }

  render() {
    const { filteredPosts } = this.state;
    return (
      <div className="postsContainer">
        <div className="title">List of posts</div>
        <div className="filterData">
          <label htmlFor="filterTitle" >
            Filter data as per title: 
          </label>
          <input id="filterTitle" onKeyUp={e => this.filterPosts(e)} />
        </div>
        <table>
          <tbody>
            <tr className="headRow">
              <td>No.</td>
              <td>User Id</td>
              <td>Title</td>
              <td>Description</td>
            </tr>
              {filteredPosts.map( (post,i) => (
              (i<10)? (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ) : '')
              )}
          </tbody>
        </table>
      </div>
    )
    }
}

export default Posts;