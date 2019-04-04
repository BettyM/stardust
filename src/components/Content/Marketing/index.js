import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import option1Data from './option1Data'

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />)

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails)

export default class Marketing extends Component {
  constructor() {
    super()
    this.state = {
      expanded: 'panel1',
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  }

  option1 = () => {
    const { expanded } = this.state
    return (
      <ExpansionPanel
        square
        expanded={expanded === 'panel1'}
        onChange={this.handleChange('panel1')}
      >
        <ExpansionPanelSummary>
          <Typography className="subtitle-text">
            Todos nacemos Mercury
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid item xs={12}>
            <div className="grid-root">
              <GridList cellHeight={160} className="grid-list" cols={3}>
                {option1Data.map(tile => (
                  <GridListTile
                    key={tile.img}
                    cols={tile.cols || 1}
                    className="grid-tile"
                  >
                    <img
                      src={tile.img}
                      alt={tile.title}
                      className="content-image"
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  option2 = () => {
    const { expanded } = this.state
    return (
      <ExpansionPanel
        square
        expanded={expanded === 'panel2'}
        onChange={this.handleChange('panel2')}
      >
        <ExpansionPanelSummary>
          <Typography className="subtitle-text">
            Mercury Race; concluye el cuento.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  option3 = () => {
    const { expanded } = this.state
    return (
      <ExpansionPanel
        square
        expanded={expanded === 'panel3'}
        onChange={this.handleChange('panel3')}
      >
        <ExpansionPanelSummary>
          <Typography className="subtitle-text">
            Difusión de programa STEM-F1 en educación básica.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  option4 = () => {
    const { expanded } = this.state
    return (
      <ExpansionPanel
        square
        expanded={expanded === 'panel4'}
        onChange={this.handleChange('panel4')}
      >
        <ExpansionPanelSummary>
          <Typography className="subtitle-text">
            Carrera verde con Mercury Project.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  option5 = () => {
    const { expanded } = this.state
    return (
      <ExpansionPanel
        square
        expanded={expanded === 'panel5'}
        onChange={this.handleChange('panel5')}
      >
        <ExpansionPanelSummary>
          <Typography className="subtitle-text">
            Viviendo f1 con Mercury Project.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  render() {
    return (
      <div>
        {this.option1()}
        {this.option2()}
        {this.option3()}
        {this.option4()}
        {this.option5()}
      </div>
    )
  }
}
