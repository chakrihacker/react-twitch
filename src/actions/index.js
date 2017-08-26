export const addChannel = (channelName) => ({
  type: 'ADD_CHANNEL',
  channelName
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const channelHasErrored = (bool) => ({
  type: 'CHANNEL_HAS_ERRORED',
  hasErrored: bool
})

export const channelIsLoading = (bool) => ({
  type: 'CHANNEL_IS_LOADING',
  isLoading: bool
})

export const channelFetchDataSuccess = (channel) => ({
  type: 'CHANNEL_FETCH_DATA_SUCCESS',
  channel
})

export const channelFetchData = (channelName) => {
  return async dispatch => {
    dispatch(channelIsLoading(true))
    let channelData = await (await fetch(`https://wind-bow.glitch.me/twitch-api/channels/${channelName}`)
      .then(res => res.json())
      .catch(() => dispatch(channelHasErrored(true))));
    let channelStream = await (await fetch(`https://wind-bow.glitch.me/twitch-api/streams/${channelName}`)
      .then(res => res.json())
      .catch(() => dispatch(channelHasErrored(true))));
    console.log(channelName)
    if (channelData.status === 404) {
      dispatch(channelHasErrored(true))
      dispatch(channelIsLoading(false))
    } else {
      let logo = channelData.logo === null ? 'https://res.cloudinary.com/chakrihacker/image/upload/c_scale,w_50/v1492768092/black-twitch-icon_hk59j8.png' : channelData.logo;
      let game = channelStream.stream === null ? 'Offline' : channelStream.stream.game;
      let data = {
        id: channelData._id,
        link: channelData.url,
        logo: logo,
        game: game,
        name: channelData.display_name
      }
      dispatch(channelIsLoading(false))
      dispatch(channelHasErrored(false))
      dispatch(channelFetchDataSuccess(data))
    }   
    
  }
}
