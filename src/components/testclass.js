// import React , { Component } from 'react';
import React  from 'react';

class Hello extends React.Component {

    //
    constructor(props) {
        super(props);
        this.decrease2 = this.decrease2.bind(this)
    }
    state = {
        state : 'true',
        count : 0,
        user : {
            name : 'Fahad',
            age : 16,
        },
        arr : [1,5,3],
        sociallink :
            {
                'Twitter'   : 'FaHaDoF' ,
                'Facebook'  : 'Fahad',
                'Email'     : 'fahad@gmail.com'
            }
    }

    // Arrow Function , easy way to handle error undefined setState
    reset = () => {
        this.setState({count : 0});
    }

    // Normal function , Here will get an error cause this function will not know 'this' word
    // The solution is by use bind(this) or use constructor
    decrease () {
        this.setState({count : this.state.count - 1});
    }

    // Another test this used in constructor
    decrease2 () {
        this.setState({count : this.state.count - 10});
    }

    ChangeName (event){
        this.setState({
            user : {
                // To save old Data
                ...this.state.user,
                name : event.target.value
            }
        });
    }

    render(){
        return <div>Good Morning {this.props.name}. I'am Class Component
            <p> State   : {this.state.state}</p>
            <p> Name    : {this.state.user.name}</p>
            <p> Age     : {this.state.user.age}</p>

            {/* This Array will be Sorted*/}
            <p> arr     : {(this.state.arr).sort()}</p>
            <h5>{this.state.count}</h5>

            <button onClick={()=>(this.setState({count : this.state.count + 1}))}>Increase</button>

            <button onClick={this.reset}>Reset</button>

            {/*Use bind to prevent the error : undefined setState */}
            <button onClick={this.decrease.bind(this)}>Decrease</button>

            {/*Another way without use bind define it in constructor function*/}
            <button onClick={this.decrease2}>Decrease - 10</button>

            <br/>
            <br/>
            Change your Name :  
            <input onChange={this.ChangeName.bind(this)}/>
        </div>
    }
}
export default Hello;

