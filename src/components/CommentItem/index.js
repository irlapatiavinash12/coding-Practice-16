// Write your code here

import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    initialbackground,
    commentDetails,
    toggleLikeButton,
    toggleDeleteButton,
  } = props
  const {id, name, date, comment, isLike} = commentDetails
  const initial = name[0]
  const exactlyPosted = formatDistanceToNow(date)

  const onClickLikeButton = () => {
    toggleLikeButton(id)
  }

  const onClickDeleteButton = () => {
    toggleDeleteButton(id)
  }
  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="list-styling">
      <div className="list-first-container">
        <p className={`initial-styling ${initialbackground}`}>{initial}</p>
        <p className="name-styling">{name}</p>
        <p className="time-styling">{exactlyPosted} ago</p>
      </div>
      <p>{comment}</p>
      <div className="under-img-styling">
        <button
          type="button"
          onClick={onClickLikeButton}
          className="button-styling-mainipulation"
        >
          <img src={likeImgUrl} alt="like" className="images" />
          Like
        </button>
        <button
          type="button"
          onClick={onClickDeleteButton}
          className="button-styling-mainipulation"
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="images"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
