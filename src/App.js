import React, {Component} from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from "./components/Backdrop/Backdrop"

class App extends Component{
state={
  sideDrawerOpen: false,
  matches: window.matchMedia("(min-width: 768px)").matches
}

  drawerToogleClickHandler = () => {
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
}

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
}

componentDidMount() {
  const handler = e => this.setState({matches: e.matches});
  window.matchMedia("(min-width: 768px)").addListener(handler);
}

  render(){
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer/>
      backdrop = <Backdrop click ={this.backdropClickHandler}/>
    }
  return (
    <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToogleClickHandler}/>
        {sideDrawer}
        {backdrop}
        <main style ={{marginTop: '100px', marginLeft: '500px'}}>
        {/* {this.state.matches && ()} */}
        </main>
        
    </div>
  );
}
}

export default App;
