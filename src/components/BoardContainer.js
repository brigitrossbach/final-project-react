import React from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions/user_actions'
import Board from './Board'

class BoardContainer extends React.Component {

  state={
    selectedBoard: null
  }

  componentDidMount(){
    this.props.fetchCurrentUser()
  }

  handleOptionChange = (event) => {
    let board = this.props.currentUser.boards.find(board => board.id == event.target.value)
    this.setState({selectedBoard: board}, console.log(this.state))
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
      }
      return(
        <div>
          <form>
            <input type='text' placeholder='Create a New Board' />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
