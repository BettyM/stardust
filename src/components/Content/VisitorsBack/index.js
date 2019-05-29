import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Query, Mutation } from "react-apollo"
import VisitorForm from './visitorForm'
import CreateVisitor from './Mutations/createVisitor'
//import UpdateRole from './mutations/UpdateRole'
import GetVisitor from './queries/getVisitor'

const Visitors = withFormik({
//const Visitors = ({}) => {
        enableReinitialize: true,
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .max(128, 'No more then 128')
                .required('Role name is required'),
        }),
        mapPropsToValues: ({ states, variables, resetForm } = {}) => {
            const role = (states.queryState.data && states.queryState.data.role) || variables;
            return role
        },
        handleSubmit: (values, { props, setSubmitting, setErrors, resetForm }) => {
            const { actions: { createRole, updateRole } = {} } = props;
            const isUpdate = !!values.id;
            if (isUpdate) {
                updateRole({ variables: values }).then(({ data: { updateRole } = {} } = {}) => {
                    setSubmitting(false);
                    resetForm({ id: updateRole.node.id, name: updateRole.node.name });
                }).catch(e => {
                    const errors = e.graphQLErrors || [];
                    const error = errors.map(err => err.message).join('\n');
                    setSubmitting(false);
                    setErrors({ name: error });
                });
            } else {
                createRole({ variables: { name: values.name } }).then(({ data: { createRole } = {} } = {}) => {
                    setSubmitting(false);
                    resetForm({ id: createRole.node.id, name: createRole.node.name });
                }).catch(e => {
                    const errors = e.graphQLErrors || [];
                    const error = errors.map(err => err.message).join('\n');
                    setSubmitting(false);
                    setErrors({ name: error });
                });
            }
        },
        displayName: 'VisitorForm'
})(VisitorForm)

const withCompose = FormComponent => (props, actions, states) => (updateRole, updateState) =>
    <FormComponent {...props} 
        actions={{ ...actions, updateRole }}
        states={{ ...states, updateState }} 
    />

    /*
const withUpdateMutation = wrapperFn => (props, queryState) => (createRole, createState) => 
    <Mutation mutation={UpdateRole}>
        {wrapperFn(props, { createRole }, { queryState, createState })}
    </Mutation>
*/
const withCreateMutation = wrapperFn => props => queryState =>
    <Mutation mutation={CreateVisitor}>
        {wrapperFn(props, queryState)}
    </Mutation>

const withQuery = wrapperFn => props =>
    <Query query={GetVisitor} 
           skip={!props.variables.id} 
           variables={props.variables}>
        {wrapperFn(props)}
    </Query>

export default withQuery(withCreateMutation(withCompose(Visitors)))
