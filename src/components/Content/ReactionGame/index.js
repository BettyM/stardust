import React from 'react'
import Grid from '@material-ui/core/Grid'

const ReactionGame = () => {
  return (
    <Grid item xs={12}>
      <div>
        <iframe
          src="https://f1-start.glitch.me/"
          height="800"
          width="1000"
          title="game"
          className="iframe"
        />
      </div>
    </Grid>
  )
}

export default ReactionGame
