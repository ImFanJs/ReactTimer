import React from 'react'
import Nav from 'Nav'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div>
            <Nav/>
            <h1 className='text-center'></h1>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
