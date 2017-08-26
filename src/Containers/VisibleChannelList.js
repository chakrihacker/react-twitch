import { connect } from 'react-redux'
import ChannelList from '../Components/ChannelList'
import  { channelFetchData } from '../actions'

const getVisibleChannels = (channels, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return channels
    case 'SHOW_ONLINE':
      return channels.filter(c => c.game !== 'Offline')
    case 'SHOW_OFFLINE':
      return channels.filter(c => c.game === 'Offline')
  }
}

const mapStateToProps = (state) => ({
  channels: getVisibleChannels(state.channels, state.visibilityFilter),
  hasErrored: state.channelHasErrored,
  isLoading: state.channelIsLoading
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (channelName) => dispatch(channelFetchData(channelName)) 
  }
}

const VisibleChannelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList)

export default VisibleChannelList