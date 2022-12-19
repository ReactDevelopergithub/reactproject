import User from './User';
import './App.css';
import Class from './Class';
import Event from './component/Event';
import Classstate from './component/Classstate';
//import Useprops from './component/Useprops';
//import Classprops from './component/Classprops';
//import { useState } from 'react';
import React from 'react';
import Input from './component/Input';
import Toggle from './component/Toggle';
import Form from './component/Form';
import Ifcondition from './component/Ifcondition';
import Fromvalidation from './component/Fromvalidation';
import Functionprops from './component/Functionprops';
//import Renderlifecycle from './component/Renderlifecycle';
import Shouldupdate1 from './component/Shouldupdate1';
import Createhook from './component/Createhook';
import Trybootstrap from './component/Trybootstrap';
import Mapping from './component/Mapping';
import Nestedlist from './component/Nestedlist';
import Parent from './component/Parent';
import Purecomponent from './component/Purecomponent';
import Memocomponent from './component/Memocomponent';
import Createref from './component/CreateRef';
import Reffunction from './component/Reffunction';
import Forwardrefparent from './component/Forwardrefparent';
import Controll from './component/Controll';
import Uncontroll from './component/Uncontroll';
import Hoc from './component/Hoc';
/*class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:'Password'
    }

  }
render(){*/
function App() {
  function datapass(){
    alert("Function call the next page in using the props");
  }
  //const [hme, setHme] = useState("mansab")
  return (
    <>
      <div>hey</div>
      <User />
      <Class />
      <div className='container'>
        <Event />
      </div>
      <Classstate />
      {/*<Useprops hme={hme} other={{address:'Wazirabad', phone:'03895477'}}/>
        <button onClick={()=>setHme("Iqbal")}>click the change value</button>
      <Classprops name={this.state.name} infor='using the props' email='mansabiqbal101@gmail.com' />
      <button onClick={() => this.setState({ name: 'Email' })}>Check Out</button>*/}
      <Input/>
      <Toggle/>
      <Form/>
      <Ifcondition/>
      <Fromvalidation/>
      <div style={{backgroundColor: 'green', textAlign:'center'}}>
        <Functionprops data={datapass}/>
        <br/>
        {/*<Renderlifecycle/>*/}
        
      </div>
      <Shouldupdate1/>
      <div style={{ backgroundColor: 'brown', textAlign: 'center' }}>
        <Createhook name='Mansab' address='Wazirabad' />
      </div>
      <Trybootstrap/>
      <div className='container'>
       <Mapping/> 
      </div>
      <Nestedlist/>
      <Parent/>
      <Purecomponent/>
      <div className='container'>
        <Memocomponent/>
      </div>
      <div style={{ textAlign: 'center', backgroundColor: '#ccc', color: '#fff' }}>
        <Createref/>
        <Reffunction/>
        <Forwardrefparent/>
        <Controll/>
        <Uncontroll/>
        
      </div>
      <Hoc/>
    </>
  );
}

export default App;
