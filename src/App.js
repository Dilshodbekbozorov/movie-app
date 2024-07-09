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
      term: '',
      filter: 'all',
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

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular': 
        return arr.filter(c => c.like)
      case "mostViewers": 
        return arr.filter(c => c.views > 800)
      default:
        return arr;
    }
  }

  updateTermHandler = (term) => {
    this.setState({term})
  }

  updateFilterHandler = filter => this.setState({ filter })

 render() {
  const {data, term, filter} = this.state
  const allMoviesCount = data.length
  const favouriteMovieCount = data.filter(c => c.favourite).length
  const visibleData = this.filterHandler(this.searchHandler(data, term), filter) 

  return (
    <div className="app">
      <div className='content'>
        <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount} />
        <div className='search-panel'>
          <SearchPanel updateTermHandler={this.updateTermHandler} />
          <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
        </div>
        <MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
        <MoviesAddForm addForm={this.addForm} />
      </div>
    </div>
  );
 }
}

export default App;
