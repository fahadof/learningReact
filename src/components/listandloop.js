import React from 'react';

function UsersList(props){
    const users = props.users;
    return <ul>
        {/*{fruits.map(item=><li key={Math.random(10)}>{item}</li>)}*/}
        {users.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
}
function Lists(props){
    const fruits = ['Apple' , 'Orange' ,'Apple' , 'Orange' , 'Banana', 'Orange' , 'Banana'];

    let users = [
        {id : 1 ,name : 'fahad' , age : 22 , work : 'programer'},
        {id : 2 ,name : 'Hasan' , age : 65 , work : 'not working'},
        {id : 3 ,name : 'Majed' , age : 18 , work : 'student'},
    ];
    return <div>
        <UsersList users={users}/>
        <UsersList users={users}/>
    </div>;
}

export default Lists;
