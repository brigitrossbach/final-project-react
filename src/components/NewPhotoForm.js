import React from 'react'

class NewPhotoForm extends React.Component {

  state={
    file: '',
    imagePreviewUrl: '',
    caption: ''
  }

  handleChange = (event) => {
    event.preventDefault()

    let reader = new FileReader()
    let file = event.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
   }

   handleCaptionChange = (event) => {
     this.setState({caption: event.target.value})
   }

  handleSubmit= (event) => {
    event.preventDefault()
    let form = event.target.parentElement
    let data=new FormData(form)
    data.append('image', this.state.imagePreviewUrl)
    data.append('caption', this.state.caption)
    fetch('http://localhost:3000/photos', {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .then(() => this.props.history.push('/me'))
  }

  render(){
    let {imagePreviewUrl} = this.state
    let $imagePreview = null
    if (imagePreviewUrl){
      $imagePreview = (<img className='image-preview' alt='uploaded'src={imagePreviewUrl} />)
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='file' accept='image/*' onChange={this.handleChange} required/><br />
          <input type='text' onChange={this.handleCaptionChange} value={this.state.caption} placeholder="Caption" required/><br />
          <button type="submit" onClick={this.handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
      </div>
    )
  }
}

export default NewPhotoForm
