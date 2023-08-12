import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, arrowFunction} = props
  const {suggestion} = suggestionDetails

  const onClickingArrowButton = () => {
    arrowFunction(suggestion)
  }

  return (
    <li className="list-items">
      <p className="suggestion-item">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClickingArrowButton}
      />
    </li>
  )
}

export default SuggestionItem
