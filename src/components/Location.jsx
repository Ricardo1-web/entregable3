import axios from "axios"


const Location = ({ location, setLocation }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))
  }

  return (
    <section className="text-center text-green-500 p-4">
      <h1 className="text-6xl p-4">RICK AND MORTHY </h1>
      <form onSubmit={handleSubmit} className="p-6">
        <input id="newLocation" className="border-2 border-green-400 bg-black opacity-80 text-white" placeholder="Type a location Id ..." type="text" />
        <button className=" border-2 border-green-400 text-white bg-green-400 opacity-70">Search <i className=' bx bx-search text-white'></i></button>
      </form>
      <article className="p-6 container py-2 bg-black opacity-80 text-white fixedw-full ">
        <h2 className="gap-10 columns-1 p-2">{location?.name} </h2>
        <ul className="gap-10 columns-3">
          <li>type: {location?.type}</li>
          <li>dimension: {location?.dimension}</li>
          <li>population: {location?.residents.length}</li>
        </ul>
      </article>
      <h3 className="p-6 opacity-90">¡Wellcome to the crazy universe!</h3>
    </section>
  )
}
export default Location