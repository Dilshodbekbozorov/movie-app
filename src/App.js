import './App.css';
import AppFilter from './components/app-filter/app-filter';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import MovieList from './components/movie-list/movie-list';
import MoviesAddForm from './components/movies-add-form/movies-add-form';


function App() {
  const data = [
    {name: 'Empire of Osmon', viewers: 999, favourite: false},
    {name: 'Adventure', viewers: 1000, favourite: false},
    {name: 'Osmon', viewers: 109, favourite: true},
  ]


  return (
    <div className="app">
      <div className='content'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data}/>
        <MoviesAddForm />
      </div>
    </div>
  );
}

export default App;
