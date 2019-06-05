import React, { Component } from 'react'
//import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import client from '../../../apollo'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField
} from '@material-ui/core'

const SUBMIT_POST = gql`
  mutation submitPost($input: PostInput!) {
    submitPost(input: $input) {
      id
      name
      comment
    }
  }
`

export default class Visitors extends Component {
  constructor() {
    super()
    this.state = {
      id: null,
      name: "",
      comment: "",
    }
  }

  handleChange = (e) => {
    if (e.target.id === "user-name") {
      this.setState({ name: e.target.value })
    } else {
      this.setState({ comment: e.target.value })
    }
  }

  saveComment = async () => {
    //const input = this.state


    await client.mutate({
      //variables: { input },
      variables: this.state,
      mutation: SUBMIT_POST,
      //refetchQueries: () => [{ query: GET_POSTS }],
    })
  }

  render() {
    const { name, comment } = this.state
  return (
    <div className="grid-root">
      <Card className="user-form">
      <CardContent>
      <Grid container spacing={24} alignItems="center" justify="center">
        <h1>Inspiración que impulsa</h1>
        <Grid item xs={12}>
          <TextField
              id="user-name"
              name="user"
              label="Nombre"
              margin="normal"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              onChange={e => this.handleChange(e)}
              value={name}
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
              id="user-comment"
              name="comment"
              label="Comentario, Que te inspira?"
              margin="normal"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              onChange={e => this.handleChange(e)}
              multiline
              rows="4"
              required
              value={comment}
            />
        </Grid>
        <CardActions>
        <Button
              className="user-button"
              color="primary"
              variant="contained"
              onClick={e => this.saveComment(e)}
            >
          Enviar Comentario
        </Button>
        </CardActions>
      </Grid>
      </CardContent>
      </Card>
    </div>
  )
  }
}
