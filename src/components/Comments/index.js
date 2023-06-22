import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    commentsCount: 0,
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
      commentsCount: prevState.commentsCount - 1,
    }))
  }

  onClickAddCommentButton = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      likeStatus: false,
      bgColor: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      index: prevState.index + 1,
      commentsCount: prevState.commentsCount + 1,
    }))
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  getComment = event => {
    this.setState({comment: event.target.value})
  }

  onLikedFunction = id => {
    // const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, likeStatus: !eachComment.likeStatus}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentsList, commentsCount, name, comment} = this.state

    return (
      <div className="comments-container">
        <h1 className="heading"> Comments </h1>
        <div className="add-comment-container">
          {/* <div className="image-container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="comments-image"
            />
          </div> */}
          <form className="comment">
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="input-name"
              onChange={this.getName}
              value={name}
            />
            <textarea
              cols="100"
              rows="6"
              id="name"
              placeholder="Your Comment"
              className="input-comment"
              onChange={this.getComment}
              value={comment}
            />
            <button
              type="submit"
              className="add-comment-button"
              onClick={this.onClickAddCommentButton}
            >
              Add Comment
            </button>
          </form>
          <div className="image-container2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="comments-count">
          <p className="count">{commentsCount}</p>
          <p className="description-comment"> Comments </p>
        </div>
        <ul className="unordered-comments-list">
          {commentsList.map(eachCommentDetails => (
            <CommentItem
              key={eachCommentDetails.id}
              eachCommentDetails={eachCommentDetails}
              deleteComment={this.deleteComment}
              //   indexValue={this.indexValue}
              onLikedFunction={this.onLikedFunction}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
