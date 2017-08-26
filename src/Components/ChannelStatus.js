import React, { Component } from 'react';
import FilterLink from '../Containers/FilterLink'

const ChannelStatus = () => (
  <div>
    <FilterLink filter="SHOW_ALL">
      ALL
    </FilterLink>
    <FilterLink filter="SHOW_ONLINE">
      ONLINE
    </FilterLink>
    <FilterLink filter="SHOW_OFFLINE">
      OFFLINE
    </FilterLink>
  </div>
)

export default ChannelStatus;