// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello';
import Welcome from './components/Welcome/Welcome'
import Message from './components/Message/Message';
import { Component } from 'react';
import Counter from './components/Counter/Counter';
import Functionclick from './components/Functionclick';



class App extends Component {
 render(){ 
  return ( 
    <>
    {/* <Hello />
    <Welcome /> */}
    {/* <Message /> */}
    {/* <Counter /> */}
    <Functionclick />
    </>
   
   
  );
 }
}

export default App;