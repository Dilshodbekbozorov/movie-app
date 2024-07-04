import './movies-add-form.css'

function MoviesAddForm() {
  return (
    <div className='movies-add-form'>
      <h3>Yangi kino qo'shish</h3>
      <form>
        <input type="text" className='form-control new-post-label' placeholder='Qanday kino?'/>
        <input type="text" className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan?" />
        <button type='submit' className='btn btn-outline-dark'>
            Qo'shish
        </button>
      </form>
    </div>
  )
}

export default MoviesAddForm
