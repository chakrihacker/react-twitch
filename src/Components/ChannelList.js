import React, { PropTypes } from 'react';
// import List from './List.js';
import Channel from './Channel'

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    let channels = ['test_channel', 'esl_sc2', 'FreeCodeCamp', 'chakrihacker']
    channels.forEach((channel) => {
      this.props.fetchData(channel) 
    })
  }
  render() {
    return (
      <div>
        {this.props.isLoading && <span className="glyphicon glyphicon-refresh spinning"></span>}
        <ul>
          {this.props.channels.map(channel =>
            <Channel key={channel.id}
              {...channel}
            />
          )}
        </ul>
      </div>
    )
  }  
}

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    game: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ChannelList