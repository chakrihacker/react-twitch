import React from 'react';
import ChannelStatus from './ChannelStatus';
import Search from './Search';
import VisibleChannelList from '../Containers/VisibleChannelList';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  margin: '10px auto 50px auto',
  background: 'white',
};

const hrStyle = {
  background: 'black',
  height: '5px'
}

const App = () => (
  <div>
    <div style={styles} className="container">
      <h2><span>{'\u2728'}</span> React Twitch <span> {'\u2728'} </span></h2>
      <hr style={hrStyle} />
      <Search />
      <hr style={hrStyle} />
      <VisibleChannelList />
      <hr style={hrStyle} />
      <ChannelStatus />
      <hr style={hrStyle} />
    </div>
    <footer>
      Built with <span>{'\u2764'}</span> by <a className="footer_link" target="_blank" href="https://twitter.com/chakrihacker">chakrihacker</a>
    </footer>
  </div>
);

export default App