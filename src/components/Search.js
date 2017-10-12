import React from 'react'

class Search extends React.Component {

  state={
    searchTerm:''
  }

  handleChange=(e)=> {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit=(e) => {
    e.preventDefault()
    console.log(this.state.searchTerm)
  }

  render(){
    return(
      <form>
      <input onChange={this.handleChange} className='search-box' type='text' placeholder='Search...' />
      </form>
    )
  }
}

export default Search
