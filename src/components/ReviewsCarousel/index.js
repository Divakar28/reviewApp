import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {activeStateIdex: 0}

  onClickRightButton = () => {
    const {activeStateIdex} = this.state
    const {reviewsList} = this.props
    if (activeStateIdex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeStateIdex: prevState.activeStateIdex + 1,
      }))
    }
  }

  onClickLeftButton = () => {
    const {activeStateIdex} = this.state
    const {reviewsList} = this.props

    if (activeStateIdex > 0) {
      this.setState(prevState => ({
        activeStateIdex: prevState.activeStateIdex - 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="pr">
        <img src={imgUrl} className="img" alt="imgUrl" />
        <h1 className="h">{username}</h1>
        <p className="company">{companyName}</p>
        <p className="des">{description}</p>
      </div>
    )
  }

  render() {
    const {activeStateIdex} = this.state
    const {reviewsList} = this.props

    const currentReviewList = reviewsList[activeStateIdex]

    return (
      <div className="bg">
        <h1 className="head">Reviews</h1>
        <div className="con">
          <button
            className="btn"
            type="button"
            onClick={this.onClickRightButton}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewList)}
          <button
            className="btn"
            type="button"
            onClick={this.onClickLeftButton}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default Home
