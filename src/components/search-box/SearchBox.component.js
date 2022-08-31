import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Enter a monster"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
