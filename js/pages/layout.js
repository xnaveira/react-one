import React from "react";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Body from "../components/body";

export default class Layout extends React.Component {


   render() {
    	return (
		  <div>
          <Header />
          {this.props.children}
          <Footer />
      </div>

		);
   }
   //<Body playables={this.state.playables}/>
}
