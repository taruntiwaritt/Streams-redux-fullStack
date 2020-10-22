import React from 'react';
import {Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component{

renderError({error,touched}){
    if(touched && error){
        return(
            <div className="ui error">
                <div className="header">{error}</div>
            </div>
        )
    }
}

    renderInput = ({input, label, meta})=> {
        const className = `field ${meta.error && meta.touched? 'error':''}`
        return (
            //meta is used to get error from validation
            // <input onChange={formProps.input.onChange} value={formProps.input.value} /> with (formProps) as argument
            // or we can assign as
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) =>{
        this.props.createStream(formValues);

    }
    render(){
        console.log(this.props)
        return (
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
           <Field name="title" component={this.renderInput} label="Enter title"/> 
           <Field name="description" component={this.renderInput} label="Enter description"/> 

           <button className="ui button primary">Submit</button>
        </form>
        )
    }

}

const validate = (formValues) =>{
    const errors = {};
    if(!formValues.title){
        errors.title = 'enter title';
    }
    if(!formValues.description){
        errors.description = 'enter description';
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default  connect(null,{createStream})(formWrapped)