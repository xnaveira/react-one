import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Layout from "./pages/layout";
import Listing from "./pages/listing";
import Search from "./pages/search";
import Player from "./pages/player"

const reactone = document.getElementById('p2flix');

ReactDOM.render(
   <Router history={hashHistory}>
      <Route path="/" component={Layout}>
         <IndexRoute component={Layout} />
         <Route path="listing" name="listing" component={Listing} />
         <Route path="player/:playable" name="player" component={Player} />
      </Route>
   </Router>,
   reactone);
