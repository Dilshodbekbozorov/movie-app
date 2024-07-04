import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'


const MovieList = ({data}) => {
  
  return (
    <ul className='movie-list'>
    {data.map(item => (
      <MovieListItem viewer={item.viewer} name={item.name} favourite={item.favourite} />
    ))}
    </ul>
  )
}

export default MovieList
