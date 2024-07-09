import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'


const MovieList = ({data, onDelete, onToggleProp}) => {
  
  return (
    <ul className='movie-list'>
    {data.map(item => (
      <MovieListItem 
        key={item.id} 
        viewer={item.views}  
        name={item.name} 
        favourite={item.favourite} 
        like={item.like}
        onDelete={() => onDelete(item.id)} 
        onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
    ))}
    </ul>
  )
}

export default MovieList
