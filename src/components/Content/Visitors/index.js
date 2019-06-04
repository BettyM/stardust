import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField
} from '@material-ui/core'

const Visitors = () => {
              //onChange={this.props.handleChange}
              //onClick={() => saveReminder(currentReminder)}
  return (
    <div className="grid-root">
      <Card className="user-form">
      <CardContent>
      <Grid container spacing={24} alignItems="center" justify="center">
        <Grid item xs={12}>
          <TextField
              id="user-name"
              name="user"
              label="Nombre"
              margin="normal"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              defaultValue="Visitor0"
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
              id="user-comment"
              name="comment"
              label="Comentario"
              margin="normal"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              defaultValue=""
              multiline
              rows="4"
              required
            />
        </Grid>
        <CardActions>
        <Button
              className="user-button"
              color="primary"
              variant="contained"
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

export default Visitors
