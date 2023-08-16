import axios from "axios"


const Location = ({location, setLocation}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input id="newLocation" className="text-black" placeholder="Type a location Id ..." type="text" />
        <button>Search <i className='bx bx-search'></i></button>
      </form>
      <section>
        <h2>{location?.name} </h2>
        <ul>
          <li>type: {location?.type}</li>
          <li>dimension: {location?.dimension}</li>
          <li>population: {location?.residents.length}</li>
        </ul>
      </section>
    </section>
  )
}
export default Location