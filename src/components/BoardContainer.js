import React from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions/user_actions'
import Board from './Board'
import { addBoard } from '../actions/board_actions'

class BoardContainer extends React.Component {

  state={
    selectedBoard: null,
    newBoard: ''
  }

  componentDidMount(){
    this.props.fetchCurrentUser()
  }

  handleOptionChange = (event) => {
    let board = this.props.currentUser.boards.find(board => board.id == event.target.value)
    this.setState({selectedBoard: board})
  }

  handleChange = (event) => {
    this.setState({newBoard: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let body=JSON.stringify({name: this.state.newBoard, user_id: this.props.currentUser.id})
    this.props.addBoard(body)
    this.setState({newBoard:''})
  }

  render(){
    let boardChoices
    let chosenBoard
    if (this.props.currentUser){
      if (this.props.currentUser.boards){
        boardChoices=this.props.currentUser.boards.map((board, index) => <label key={index}><input type='radio' key={index} value={board.id} name='board-options' onChange={this.handleOptionChange} />{board.name}</label> )
      } else {
        boardChoices=null
      }
      if (this.state.selectedBoard) {
        let currentBoard = this.state.selectedBoard
        chosenBoard = <Board board={currentBoard} />
      } else {
        chosenBoard=null
      }
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} placeholder='Create a New Board' />
            <button type='submit' value='submit'>Add Board</button>
          </form>
          <div className='board-selector'>
            <p>Or select a board</p>
            {boardChoices}
          </div>
          {chosenBoard}
        </div>
        )
    } else {
      return (
        <div></div>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.users.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser())
    },
    addBoard: (body) => {
      dispatch(addBoard(body))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
