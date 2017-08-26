import React, { PropTypes } from 'react'

const imageStyles = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: '1px solid black'
}

const liStyle = {
  height: '60px',
  listStyle: 'none'
};

const Channel = ({ game, link, logo, name }) => (
  <li style={liStyle}>
    <div className="col-xs-2 col-sm-1">
      <img style={imageStyles} src={logo} alt="logo" />
    </div>
    <div className="col-xs-10 col-sm-offset-3 col-sm-3 text-center">
      <a href={`https://www.twitch.tv/${name}`} target="_blank">
        {name}
      </a>
    </div>
    <div className="col-xs-10 col-sm-5">
      <p>{game}</p>
    </div>
  </li>
)

Channel.propTypes = {
  game: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Channel