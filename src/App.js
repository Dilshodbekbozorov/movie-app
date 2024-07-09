import { Component } from 'react';
import './App.css';
import AppFilter from './components/app-filter/app-filter';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import MovieList from './components/movie-list/movie-list';
import MoviesAddForm from './components/movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Empire of Osmon', views: 999, favourite: false, like: false, id: 1},
        {name: 'Adventure', views: 1000, favourite: false, like: false, id: 2},
        {name: 'Osmon', views: 109, favourite: false, like:false, id: 3},
      ],
      term: ' ',
    }
  }

  onDelete = id => {
    this.setState(({data}) => {
      return {
        data: data.filter(c => c.id !== id),
      }
    })
  }

  addForm = (item) => {
    this.setState(({ data }) => {
      const newArr = [...data, { ...item, id: uuidv4(), favourite: false, like: false }]
      return {
        data: newArr,
      }
    })
  }

  onToggleProp = (id, prop )=> {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  searchHandler = (arr, term) => {
    if(term.length === 0) {
      return arr;
    }

    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  updateTermHandler = (term) => {
    this.setState({term})
  }

 render() {
  const {data, term} = this.state
  const allMoviesCount = data.length
  const favouriteMovieCount = data.filter(c => c.favourite).length
  const visibleData = this.searchHandler(data, term)

  return (
    <div className="app">
      <div className='content'>
        <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount} />
        <div className='search-panel'>
          <SearchPanel updateTermHandler={this.updateTermHandler} />
          <AppFilter />
        </div>
        <MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
        <MoviesAddForm addForm={this.addForm} />
      </div>
    </div>
  );
 }
}

export default App;
