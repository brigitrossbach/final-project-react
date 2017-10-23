import React from 'react'
import ProfilePhotoList from './ProfilePhotoList'
import { connect } from 'react-redux'
import { searchPhotos } from '../actions/photo_actions'

class Search extends React.Component {

  state={
    searchTerm:''
  }

  handleChange=(e)=> {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit=(event) => {
    event.preventDefault()
    this.props.searchPhotos(this.state.searchTerm)
    this.setState({searchTerm: ''})
  }

  render(){
    let results
    if (this.props.photos){
      results = <ProfilePhotoList photos={this.props.photos} />
    }
    return(
      <div className='search-container'>
        <form className='search-box' onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.searchTerm} type='text' placeholder='Search...' />
        <button type='submit' value='submit'>+</button>
        </form>
        {results}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    searchPhotos: (term) => {
      dispatch(searchPhotos(term))
    }
  }
}

function mapStateToProps(state){
  return {
    photos: state.photos.searchResults
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
