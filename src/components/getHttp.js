import {React , Component} from 'react'
import axios from 'axios';
import UserForm from "./UserForm";

async function getUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function deleteUserFromServer(id) {
    try {
        const response = await axios.put('https://jsonplaceholder.typicode.com/users/'+id);
        // const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

class GetHttp extends Component{

    state = {
        users : [],
        user : {},
        loading : true
    }
    componentDidMount = () => {
        getUsers().then(response => {
            this.setState({
                users : response.data,
                loading:false
            })
        });


    }

    setActive = (user) =>{
        console.log(user);
        this.setState({'user' : user});
    }

    deleteUser = (user) =>{
        // let users = this.state.users;
        // const index = users.indexOf(user);
        // users.splice(index , 1);
        // this.setState({users});

        deleteUserFromServer(user.id).then(()=>{

            let users = this.state.users;
            const index = users.indexOf(user);
            users.splice(index , 1);
            // this.setState({users});
        });
    }

    render() {
        if(this.state.loading)
            return null;
        return (
            <div>
                <ul>
                    {this.state.users.map((user) =>
                        <li key={user.id}>
                            <button onClick={()=>this.setActive(user)}>View</button>
                            <button onClick={()=>this.deleteUser(user)}>Delete</button>
                            {' '}
                            {"name : " + user.name}
                        </li>

                    )}
                </ul>

                <div>
                    <h3>User Details : </h3>
                    {this.state.user.id>0 ?(
                    <div>
                        id : {this.state.user.id} <br />
                        name : {this.state.user.name} <br />
                        username : {this.state.user.username} <br />
                        email : {this.state.user.email} <br />
                        street : {this.state.user.address.street} <br />
                        suite : {this.state.user.address.suite} <br />
                        city : {this.state.user.address.city} <br />
                        zipcode : {this.state.user.address.zipcode} <br />
                        city : {this.state.user.address.city} <br />
                        lat : {this.state.user.address.geo.lat} <br />
                        lng : {this.state.user.address.geo.lng} <br />
                        phone : {this.state.user.phone} <br />
                        website : {this.state.user.website} <br />
                        company name : {this.state.user.company.name} <br />
                        company catchPhrase : {this.state.user.company.catchPhrase} <br />
                        company bs : {this.state.user.company.bs} <br />
                        <br />
                    </div>) : 'Please Select a User'}
                </div>

                <div>
                    <h3>User Edit : </h3>
                    {this.state.user.id>0 ?(
                        <div>
                            <UserForm values={this.state.user}
                                      onSubmit={values=>console.log(values)}
                            />
                        </div>) : 'Please Select a User'}
                </div>
            </div>
        )
    }
}

export default GetHttp;
