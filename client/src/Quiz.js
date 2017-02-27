import React, { Component } from 'react'
import Question from './Question'
import { Header, Card, Container, Button, Segment } from 'semantic-ui-react'
import axios from 'axios'

export default class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      userTotalScore: 0,
      message: null,
    }
  }

  updateUserTotalScore = (prevScore, currScore) => {
    const newScore = this.state.userTotalScore - prevScore + currScore
    this.setState({ userTotalScore: newScore })
    this.props.updateScore(newScore)
  }

  handleSubmit = (e) => {
    axios.post('http://localhost:3001/scores', {
      score: this.state.userTotalScore,
    }).then((res) => {
      this.setState({ message: res.data.score })
      this.props.gameOver(res.data.score)
    })
  }

  render() {
    return this.props.title ? (
      <Container className='quiz'>
        <Header textAlign='center' as='h2'>{this.props.title}</Header>
        {/* <Segment>
          UserTotalScore: {this.state.userTotalScore}
        </Segment> */}
        <Card.Group>
          {this.props.questions.map(question => {
            return (
              <Question updateUserTotalScore={this.updateUserTotalScore} key={question.id} data={question} />
            )
          })}
        </Card.Group>
        <Segment basic>
          <Button size='large' onClick={this.handleSubmit} className='button-submit' positive>Submit</Button>
        </Segment>
      </Container>
    ) : null
  }
}
