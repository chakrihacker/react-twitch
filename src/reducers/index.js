import  { combineReducers } from 'redux'
import { channels,channelHasErrored, channelIsLoading } from './channels'
import visibilityFilter from './visibilityFilter'

const twitchApp = combineReducers({
  channels,
  visibilityFilter,
  channelHasErrored,
  channelIsLoading
})

export default twitchApp