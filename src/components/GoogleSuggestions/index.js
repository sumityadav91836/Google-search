import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  arrowFunction = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            className="google-img"
            alt="google logo"
          />
        </div>
        <div className="suggestion-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-box"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="suggestion">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggestionDetails={eachItem}
                arrowFunction={this.arrowFunction}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
