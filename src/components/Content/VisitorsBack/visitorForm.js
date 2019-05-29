import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class roleForm extends Component {
    handleSubmit = e => {   
        e.preventDefault();
        this.props.handleSubmit(e);
    }

    render() {
        const { 
            classes,
            errors,
            values,
            handleChange,
            handleBlur,
            isSubmitting,
            } = this.props;
        return (
            <Paper className={classes.root} elevation={4}>
                { isSubmitting && <p>Loading...</p> }
                { !isSubmitting && <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <FormControl className={classes.formControl} error={!!errors.name} aria-describedby="name-helper-text">
                        <InputLabel htmlFor="name">Visitor</InputLabel>
                        <Input id="visitor" value={values.name || ''} 
                            onChange={handleChange} 
                            onBlur={handleBlur}/>
                        <FormHelperText id="name-text">{errors.name}</FormHelperText>
                    </FormControl>
                    <Button variant="raised" type="submit" color="primary" className={classes.button}>
                        Save
                    </Button>
                </form> }
            </Paper>
        );
    }
}

roleForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(roleForm)
