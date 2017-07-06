import React, {Component} from 'react';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums'
import {HashRouter, Route} from 'react-router-dom';

export default class Main extends Component {

  constructor(props) {
    super(props);

}

  render() {
    return (
      <HashRouter>
      <div id="main" className="container-fluid">

          <div className="col-xs-2">
            <Sidebar deselectAlbum={this.deselectAlbum}/>
          </div>

          <div className="col-xs-10">

            <Route exact path='/' component={StatefulAlbums}></Route>
            <Route exact path='/albums' component={StatefulAlbums}></Route>
            <Route path='/albums/:id' component={SingleAlbum}></Route>
          <Route exact path='/artists' component={AllArtists}></Route>
          <Route path='/artists/:id' component={SingleArtist}></Route>
          </div>


          <Player/>
      </div>
      </HashRouter>
    );
  }

}
