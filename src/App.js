import './App.css';
import Test from './components/testfunction';
import Hello from './components/testclass'
import Lists from './components/listandloop'
import LifeCycle from './components/LifeCycle'
import Todo from './components/todotask'
import FormikClass from './components/FormikClass'
import GetHttp from './components/getHttp';
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}

      {/*    /!*<Test name="Samer">I dont know where is my mined</Test>*!/*/}
      {/*    /!*<br/>*!/*/}
      {/*    /!*<Hello name="Fahad"/>*!/*/}
      {/*    /!*<br/>*!/*/}
      {/*    /!*<Lists/>*!/*/}
      {/*    /!*<br/>*!/*/}
      {/*    /!*<LifeCycle/>*!/*/}
      {/*    /!*<Todo/>*!/*/}
          {/*<FormikClass/>*/}
      {/*</header>*/}

      <GetHttp/>
      {/*<UserForm/>*/}

    </div>
  );
}

export default App;
