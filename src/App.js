import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./NavBar/Navbar";
import { Banner } from "./Banner/components/Banner";
import { Launches } from "./Launches/components/Launches";
import { Capsules } from "./Capsules/components/Capsules";
import { Footer } from "./Footer/components/Footer";
import { Search } from "./Search/components/Search";


export class App extends Component{

  render(){
    return(
      <div>
        <NavBar />
      <Banner />
      <Launches />
      <Search />
      <Capsules />
      <Footer />
      </div>
    )
  }
}

export default App;