import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

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
    commentList: [],
    name: '',
    comment: '',
    count: 0,
  }

  onNameInput = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newcommentDetails = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLike: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newcommentDetails],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  toggleLikeButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  toggleDeleteButton = id => {
    const {commentList} = this.state
    const filteredList = commentList.filter(eachList => eachList.id !== id)

    this.setState(prevState => ({
      commentList: filteredList,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentList, name, comment, count} = this.state
    const initialBackgroundColor =
      initialContainerBackgroundClassNames[count - 1]
    return (
      <div className="main-bg">
        <div className="content-container">
          <h1 className="main-heading">Comments</h1>
          <div className="inputs-container">
            <div className="input-alignment">
              <p className="input-description">
                Say something about 4.0 technologies
              </p>
              <form onSubmit={this.onAddContact} className="form-styling">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="name-input"
                  value={name}
                  onChange={this.onNameInput}
                />
                <textarea
                  type="text"
                  placeholder="Your Comment"
                  className="comment-input"
                  value={comment}
                  onChange={this.onCommentChange}
                  rows="4"
                  cols="50"
                ></textarea>

                <button type="submit" className="button-styling">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="input-img-styling"
            />
          </div>
          <hr className="line-styling" />
          <p className="comment-count-styling">
            <span className="count-styling">{count}</span>Comments
          </p>
          <ul className="unordered-list-styling">
            {commentList.map(eachComment => (
              <CommentItem
                initialbackground={initialBackgroundColor}
                commentDetails={eachComment}
                key={eachComment.id}
                toggleLikeButton={this.toggleLikeButton}
                toggleDeleteButton={this.toggleDeleteButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
