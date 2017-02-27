import React, { Component } from 'react'
import { Card, Radio, Form } from 'semantic-ui-react'

export default class Question extends Component {
  constructor() {
    super()
    this.state = {
      prevScore: 0,
      currScore: null,
    }
  }

  handleChange = (e, {value}) => {
    this.setState({ currScore: value })
    this.props.updateUserTotalScore(this.state.prevScore, value)
    this.setState({ prevScore: value })
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header as='h3'>{this.props.data.title}</Card.Header>
        </Card.Content>
        {/* <Card.Content>
          Selected value: <b>{this.state.currScore}</b>
        </Card.Content> */}
        <Card.Content>
          <Form>
            { this.props.data.answers.map(answer => {
              return (
                <Form.Field key={answer.title}>
                  <Radio
                    label={answer.title}
                    name='radioGroup'
                    value={answer.score}
                    checked={this.state.currScore === answer.score}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              )
            })
          }
        </Form>
      </Card.Content>
    </Card>
    )
  }
}
