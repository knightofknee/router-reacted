import React, {Component} from 'react'
import axios from 'axios'
import AllAlbums from './AllAlbums'
import Songs from './Songs'

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
    console.log('KL is short for KOOL',this.state.artistSongs)

    const artist = this.state.artist

    return (
      <div>
        <h3>{artist.name}</h3>
        <ul></ul>

      </div>
    )
  }
}

export default SingleArtist


  // <h4>ALBUMS</h4>
  //         <AllAlbums albums={this.state.artistAlbums} />
  //         <h4>SONGS</h4>
  //         <Songs songs={this.state.artistSongs} />
