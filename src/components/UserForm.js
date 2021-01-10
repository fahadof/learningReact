import React from 'react';
import {Formik , Form , Field , ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function UserForm(props){
    const schema = Yup.object().shape({
        name    : Yup.string().required(),
        email   : Yup.string().required(),
    });
    return (
        <div>
            <Formik
            initialValues={props.values}
            enableReinitialize={true}
            validationSchema={schema}
            onSubmit={props.onSubmit}
            render={props => {
                return <Form>
                    <label>Name :</label> 
                    <Field name="name"/>
                    <ErrorMessage name="name" /><br/>

                    <label>Email :</label> 
                    <Field name="email"/>
                    <ErrorMessage name="email" /><br/>

                    <button type="submit">Submit</button>

                </Form>
            }}
            />
        </div>
    );
}
