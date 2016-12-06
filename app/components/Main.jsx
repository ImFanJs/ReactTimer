import React from 'react'
import Nav from 'Nav'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='row'>
          <div className='column medium-4 large-6 small-centered'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
