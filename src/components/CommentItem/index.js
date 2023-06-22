// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachCommentDetails, deleteComment, onLikedFunction} = props
  const {id, name, comment, likeStatus, bgColor} = eachCommentDetails

  const firstChar = name[0]

  let likeImageUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  let likeText = 'Like'
  let likeStyleClassName
  const onClickLikeButton = () => {
    onLikedFunction(id)
  }
  if (likeStatus === false) {
    likeImageUrl =
      'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    likeText = 'Like'
  } else {
    likeImageUrl =
      'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    likeText = 'Liked'
    likeStyleClassName = 'liked-sky-blue'
  }

  const onClickDeleteButton = () => {
    deleteComment(id)
  }

  //   const bgColor = initialContainerBackgroundClassNames[indexValue]

  return (
    <li className="list-item">
      <div className="name-container">
        <p className={`first-letter-logo ${bgColor}`}>{firstChar}</p>
        <div className="time-container">
          <div className="name-container">
            <p className="comment-name"> {name} </p>
            <p className="commented-time">{formatDistanceToNow(new Date())}</p>
          </div>

          <p className="para">{comment}</p>
        </div>
      </div>
      <div className="delete-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button type="button" onClick={onClickLikeButton} className="button">
            <p className={`like ${likeStyleClassName}`}> {likeText} </p>
          </button>
        </div>

        <button
          type="button"
          className="delete-button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="horizontal-line2" />
    </li>
  )
}

export default CommentItem
