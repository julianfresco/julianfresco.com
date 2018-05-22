import React from 'react'
import 'prismjs'


// Post.js code
export default () => (
<pre>
  <code className="language-js"> 
{ `/* Post.js */
import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import {
  fetchPosts,
  fetchComments,
  resetNewComment,
  deletePost,
} from '../actions'

// components
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import Vote from './Vote'
import NotFound404 from './NotFound404'


class Post extends Component {

  componentDidMount(){
    this.props.resetNewComment();

    const posts = this.props.posts;
    const postId = this.props.match.params.postId;
    const post = posts.find(post => (post.id === postId));
    const comments = this.props.comments[postId];

    if(!posts || !post){
      this.props.fetchPosts();
    }
    else if(!comments) {
      this.props.fetchComments(postId);
    }
  }

  handleEdit = () => {
    const currentUrl = this.props.match.url;
    this.props.history.push(currentUrl + '/form');
  }

  handleDelete = (post) => {
    this.props.deletePost(post)
    this.props.history.push('/' + post.category);
  }

  render() {
    const { posts, newComment } = this.props;
    const postId = this.props.match.params.postId;
    const post = posts.find(post => (post.id === postId));
    const comments = this.props.comments[postId];

    if(!post) { return <NotFound404 /> }

    return (
      <main>
        <div className="post-btns">
          <button className="post-btns-editbtn"
            onClick={this.handleEdit}>
              Edit
          </button>
          <button className="post-btns-deletebtn"
            onClick={() => { this.handleDelete(post) }}>
              Delete
          </button>
        </div>
        
        <div className="post">
          <h4 className="post-title">{post.title}</h4>
          
          <div className="post-author">
            By <span className="post-author-name">{post.author}</span>
          </div>
          
          <div className="post-timestamp">
            { new Date(post.timestamp).toLocaleString() }

            <div className="post-category" title={\`Category: \${post.category}\`}>
              <strong>{ post.category }</strong>
            </div>
          </div>

          <div className="post-content">
            <div className="post-vote">
              <Vote type="post" model={post} />
            </div>

            <div className="post-body">
              { post.body }
            </div>
          </div>
        </div>

        <div className="post-comments">
          <CommentForm model={newComment} />

          <h4>{ comments && comments.length } Comments</h4>
          { comments ? 
              <CommentList /> :
              <em>Fetching comments...</em>     
          }
        </div>
      </main>
    )
  }
}

const mapStateToProps = ({posts, comments, newComment}) => {
  return {
    posts,
    comments,
    newComment,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => 
      dispatch(fetchPosts()),
    fetchComments: (postId) =>
      dispatch(fetchComments(postId)),
    resetNewComment: () =>
      dispatch(resetNewComment()),
    deletePost: (post) =>
      dispatch(deletePost(post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)` }
  </code>
</pre>
)
