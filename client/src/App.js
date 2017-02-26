import React, { Component } from 'react'
import { Header, Menu, Icon } from 'semantic-ui-react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hi: 'lol',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/quizzes')
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className='App'>
        <Header textAlign='center' as='h1'>
          <Icon name='code' />
          <Header.Content>
            Quizzes
          </Header.Content>
        </Header>
      </div>
    )
  }
}

export default App
