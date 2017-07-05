import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class AllArtists extends Component {
  constructor() {
    super()
    this.state = {
      artistArray: []
    }
  }

  componentDidMount () {
    axios.get(`/api/artists/`)
    .then(res => res.data)
    .then(artistArray => {
      this.setState({ artistArray })
    });
}

  render() {
    return (
      <div>
        <h3>Artists</h3>
        <div className="list-group">
          {this.state.artistArray.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                {/* determine where to actually Link to later! */}
                <Link to="">{artist.name}</Link>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default AllArtists;
