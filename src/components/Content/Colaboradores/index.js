import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import MuiTooltip from '@material-ui/core/Tooltip'
import asesores from './asesores'
import patrocinadores from './patrocinadores'

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

const Tooltip = withStyles({
  tooltip: {
    color: "#E6E6E6",
    backgroundColor: "#0A1B2A",
    fontSize: "20px",
    fontStyle: "italic",
    fontFamily: "Lucida Sans Unicode",
    padding: "20px",
    borderRadius: "24px",
    textAlign: "center",
  },
})(MuiTooltip)

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
          <Grid item xs={12}>
            <div className="grid-root">
              <GridList cellHeight={160} className="grid-list" cols={2}>
                {asesores.map(tile => (
                  <GridListTile
                    key={tile.img}
                    cols={tile.cols || 1}
                    className="grid-tile grid-padding"
                  >
                    <Tooltip title={tile.tooltip} placement="top" disableTouchListener>
                    <img
                      src={tile.img}
                      alt={tile.title}
                      className="content-image"
                    />
                    </Tooltip>
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
            Patrocinadores
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid item xs={12}>
            <div className="grid-root">
              <GridList cellHeight={160} className="grid-list" cols={3}>
                {patrocinadores.map(tile => (
                  <GridListTile
                    key={tile.img}
                    cols={tile.cols || 1}
                    className="grid-tile grid-padding"
                  >
                    <Tooltip title={tile.tooltip} placement="top" disableTouchListener>
                    <img
                      src={tile.img}
                      alt={tile.title}
                      className={tile.style || "content-image"}
                    />
                    </Tooltip>
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  render() {
    return (
      <div>
        {this.option1()}
        {this.option2()}
      </div>
    )
  }
}
