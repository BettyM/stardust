import React, { Component } from 'react'
//import gql from 'graphql-tag'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
//import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
//import TextField from '@material-ui/core/TextField'
//import Button from '@material-ui/core/Button'

export default class Visitors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  handleChange = () => {
    console.log('change!')
  }

  render() {
    // Print localStorage
    console.log('Storage', localStorage)
    return (
      <Grid item xs={12}>
        <FormControl className="form-control">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" value={this.state.name} onChange={this.handleChange} />
        </FormControl>
      </Grid>
    )
  }

}
