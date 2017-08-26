import React from 'react'
import { connect } from 'react-redux'
import { channelFetchData } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (channelName) => dispatch(channelFetchData(channelName))
  }
}

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchData(this.state.value)
    this.setState({value: ''})
  }

  render() {
    return (
      <div>
        <input className="input-control" placeholder="CHANNEL NAME" type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }

}

export default connect(null, mapDispatchToProps)(Search)