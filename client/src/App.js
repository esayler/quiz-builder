import React, { Component } from 'react'
import { Header, Menu, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hi: 'lol',
    }
  }

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return (
      <div className='App'>
        <Header textAlign='center' as='h1'>
          <Icon name='code' />
          <Header.Content>
            Which JavaScript Error Are You?
          </Header.Content>
        </Header>
      </div>
    )
  }
}

export default App
