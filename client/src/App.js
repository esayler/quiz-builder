import React, { Component } from 'react'

import {
  Icon,
  Statistic,
  Container,
  Message,
  Menu,
  Grid,
  Dropdown } from 'semantic-ui-react'

import axios from 'axios'
import Quiz from './Quiz'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      quizzes: {},
      activeQuizIndex: 0,
      message: null,
      userTotalScore: 0,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/quizzes')
      .then(res => this.setState({ quizzes: res.data.quizzes }))
  }

  handleGameOver = message => {
    this.setState({ activeQuizIndex: -1, message })
  }

  goHome = _ => {
    this.handleGameOver()
    this.setActiveQuiz(0)
    this.setState({message: null, userTotalScore: 0})
  }

  updateScore = (currScore) => {
    this.setState({userTotalScore: currScore})
  }

  setActiveQuiz = (quizNum) => {
    this.setState({activeQuizIndex: quizNum})
  }

  render() {
    const quiz = this.state.activeQuizIndex !== -1 ?
      <Quiz updateScore={this.updateScore} gameOver={this.handleGameOver} {...this.state.quizzes[this.state.activeQuizIndex]} />
    : (
      <Container>
        <Grid textAlign='center'>
          <Grid.Row columns={2}>
            <Grid.Column width={2}>
              <Statistic textAlign='center'>
                <Statistic.Value>{this.state.userTotalScore}</Statistic.Value>
                <Statistic.Label>Score</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column stretched={true} width={13}>
              <Message positive>{this.state.message}</Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )

    return (
      <Container text className='App'>
        <Menu>
          <Menu.Item header onClick={this.goHome}>
            <Icon name='puzzle' />
            Quizzer
          </Menu.Item>
          <Dropdown text='Select a Quiz' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item key='0' onClick={() => this.setActiveQuiz(0)}>What JavaScript Error Are You?</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        {quiz}
      </Container>
    )
  }
}
