import { Component } from 'react'
import './movie-list-item.css'

class MovieListItem extends Component{
  constructor(props) {
    super(props)
    this.state = { favourite: false, like: false }
  }

  onFavourite = () => {
    this.setState(({ favourite }) => ({
      favourite: !favourite
    }))
  }

  onLike = () => {
    this.setState(({like}) => ({
      like: !like,
    }))
  }

  render() {
    const {name, viewer, onDelete, onToggleProp, favourite, like} = this.props
    return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
      <span onClick={onToggleProp} className="list-group-item-label" data-toggle="like">
        {name}
      </span>
      <input type="number" className="list-group-item-input" defaultValue={viewer} disabled />
      <div className="d-flex justify-content-center align-items-center">
        <button type='button' className='btn-cookie btn-sm' onClick={onToggleProp} data-toggle="favourite">
            <i className='fas fa-cookie'></i>
        </button>
        <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
            <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  )
  }
}


export default MovieListItem
