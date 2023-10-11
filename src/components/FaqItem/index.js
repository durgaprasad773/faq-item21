// Write your code here.
import {Component} from 'react'

import './index.css'

const MINUS_IMG =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
const PLUS_IMG =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMG : PLUS_IMG
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button type="button" className="button" onClick={this.onToggleClick}>
        <img src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
