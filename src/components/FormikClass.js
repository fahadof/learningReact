import {React , Component} from 'react'
import {Formik, Field, ErrorMessage , FieldArray} from "formik";
import * as Yup from 'yup';



class FormikClass extends Component{

    onSubmit = (Values) => {
    console.log(Values);
    }

    form = (props) => {
        return <form onSubmit={props.handleSubmit}>

            <label>Name :</label>
            <Field name="name"/>
            <ErrorMessage name="name"/>

            <br />
            <label>Email :</label>
            <Field name="email" type="email"/>
            <ErrorMessage name="email"/>

            <br />
            <Field name="type" component="select">
                <option value="1">Male</option>
                <option value="0">Female</option>
            </Field>
            <ErrorMessage name="type"/>

            <br />
            <label>Active :</label>
            <Field name="active" type="checkbox"/>
            <ErrorMessage name="active"/>

            <br />
            <label>Category :</label> <ErrorMessage name="category"/>
            <br />
            <Field name="category" type="radio" value="1"/> 1 <br />
            <Field name="category" type="radio" value="2"/> 2 <br />


            <br />
            <label>FaceBook :</label> <ErrorMessage name="social.facebook"/>
            <br />
            <Field name="social.facebook"/>


            <br />
            <label>Twitter :</label> <ErrorMessage name="social.twitter"/>
            <br />
            <Field name="social.twitter" /><br />

            {/* Field Array*/}
            <label>Field Array :</label> <br />
            <FieldArray
            name="friends"
            render={ arrayHelpers => (
                <div>
                    {props.values.friends.map((item, index) =>(
                        <div key={index}>
                            <Field name={`friends.${index}`}/>
                            <button onClick={()=>arrayHelpers.remove(index)}> - </button>
                            <ErrorMessage name={`friends.${index}`}/>
                        </div>
                    ))}
                    <button type="button" onClick={()=> arrayHelpers.push('')}> + </button>
                </div>
                )}
            />

            <br />
            <button type="submit">Send</button>
        </form>
    }

    schema = ()=>{
        const Schema = Yup.object().shape({
            name    : Yup.string().required(),
            email   : Yup.string().email().required(),
            type    : Yup.string().required(),
            active  : Yup.string().required(),
            category: Yup.string().required(),
            social  :Yup.object().shape({
                facebook: Yup.string().required(),
                twitter: Yup.string().required(),
            }),
            friends : Yup.array().of(
                Yup.string().required()
            )
        });

        return Schema;
    }

    //
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        name        : "" ,
                        email       : "" ,
                        type        : "" ,
                        active      : false ,
                        category    : "",
                        social      : {
                            twitter     : "",
                            facebook    : ""
                        },
                        friends : ["fahad","mhmad","fares","hasan"]
                    }}
                    onSubmit={this.onSubmit}
                    render={this.form}
                    validationSchema={this.schema()}
                />
            </div>
        )
    }
}

export default FormikClass;
