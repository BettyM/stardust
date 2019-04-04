import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

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


export default class Colaboradores extends Component {
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
            Asesores
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
            Patrocinadores
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
        <h1>Colaboradores...</h1>
        {this.option1()}
        {this.option2()}
      </div>
    )
  }
}
