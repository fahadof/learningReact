import {React , Component} from 'react'
import {Formik , Field} from "formik";


class FormikClass extends Component{

    onSubmit = (Values) => {
    console.log(Values);
    }

    form = (props) => {
        return <form onSubmit={props.handleSubmit}>

            <label>Name :</label>
            <Field name="name"/>

            <br />
            <label>Email :</label>
            <Field name="email" type="email"/>

            <br />
            <Field name="type" component="select">
                <option value="1">Male</option>
                <option value="0">Female</option>
            </Field>

            <br />
            <label>Active :</label>
            <Field name="active" type="checkbox"/>

            <br />
            <label>Category :</label>
            <br />
            <Field name="category" type="radio" value="1"/> 1 <br />
            <Field name="category" type="radio" value="2"/> 2 <br />


            <br />
            <button type="submit">Send</button>
        </form>
    }

    //
    render() {
        return (
            <div>
                <Formik
                    initialValues={{name: "" , email: "" , type: "" , active : false , category : ""}}
                    onSubmit={this.onSubmit}
                    render={this.form}
                />
            </div>
        )
    }
}

export default FormikClass;
