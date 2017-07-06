import React, {Component} from 'react'
import axios from 'axios'
import AllAlbums from './AllAlbums'
import Songs from './Songs'
import {Link, Route} from 'react-router-dom'

class SingleArtist extends Component {

  constructor(){
    super()
    this.state = {artist: {}, artistAlbums: [], artistSongs: []}
  }

  componentDidMount () {
  axios.get(`/api/artists/${this.props.match.params.id}`)
  .then(res => res.data)
  .then(artist => {
    this.setState({ artist })
  });

  axios.get(`/api/artists/${this.props.match.params.id}/songs`)
  .then(res => res.data)
  .then(artistSongs => {
    this.setState({artistSongs})
  })

  axios.get(`/api/artists/${this.props.match.params.id}/albums`)
  .then(res => res.data)
  .then(artistAlbums => {
    this.setState({artistAlbums})
  })
  }


  render(){

    const artist = this.state.artist
    console.log('asdfasdf', artist)

    return (
      <div>
        <h3>{ this.state.artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${this.props.match.params.id}/listAlbums`}>ALBUMS </Link></li>
          <li><Link to={`/artists/${this.props.match.params.id}/listSongs`}>SONGS</Link></li>
        </ul>

        <Route path='/artists/:id/listAlbums' render={() => <AllAlbums albums={this.state.artistAlbums}/>}/>
        <Route path='/artists/:id/listSongs' render={() => <Songs songs={this.state.artistSongs}/>}/>


      </div>
    )
  }
}

export default SingleArtist


  // <Route exact path='/' component={StatefulAlbums}></Route>
  //             <Route exact path='/albums' component={StatefulAlbums}></Route>
  //             <Route path='/albums/:id' component={SingleAlbum}></Route>
  //           <Route exact path='/artists' component={AllArtists}></Route>
  //           <Route path='/artists/:id' component={SingleArtist}></Route>
