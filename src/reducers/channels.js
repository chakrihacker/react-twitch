const initialChannels = [
  {
    game: "Offline", 
    link: "https://api.twitch.tv/kraken/channels/test_channel", 
    id: 6140842,
    logo : "https://res.cloudinary.com/chakrihacker/image/upload/c_scale,w_50/v1492768092/black-twitch-icon_hk59j8.png",
    name : "test_channel" 
  },
  {
    game: "StarCraft II", 
    link: "https://api.twitch.tv/kraken/channels/ESL_SC2",
    id: 30220059,
    logo : "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
    name : "ESL_SC2"
  },
  {
    game: "Offline", 
    link: "https://api.twitch.tv/kraken/channels/freecodecamp",
    id: 79776140,
    logo : "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
    name : "FreeCodeCamp"
  }
]

export const channels = (state = [], action) => {
  switch(action.type) {
    case 'CHANNEL_FETCH_DATA_SUCCESS':
      if(action.channel.failed === true) {
        return state
      } else {
        return [action.channel, ...state]
      }
    default:
      return state
  }
}

export const channelHasErrored = (state=false, action) => {
  switch(action.type) {
    case 'CHANNEL_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state
  }
}

export const channelIsLoading = (state=false, action) => {
  switch(action.type) {
    case 'CHANNEL_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}
