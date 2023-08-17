import axios from "axios"
import { useEffect, useState } from "react"

const Resident = ({ residentUrl }) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles = {
        "Alive": "bg-green-500",
        "Dead": "bg-red-500",
        "unknown": "bg-gray-400"
    }
    useEffect(() => {
        axios.get(residentUrl)
            .then(({ data }) => setResidentInfo(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <article className="border-2 border-green-400">
            <div className="relative">
                <img src={residentInfo?.image} alt="" />
                <div className="box-border h-8 w-15 p-2 border-2 bg-black opacity-70 text-white flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
                    <div className={`container h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}
                    ></div>
                    {residentInfo?.status}
                </div>
            </div>
            <section className="border border-green-400 bg-black opacity-90 text-center">
                <h4 className="text-2xl gap-10 columns-1 vector">{residentInfo?.name}</h4>
                <ul className="text-left columns-1 p-2">
                    <li>Species:<span> {residentInfo?.species} </span> </li>
                    <li>Origin:<span> {residentInfo?.origin.name} </span> </li>
                    <li>Times appear:<span> {residentInfo?.episode.length} </span> </li>
                </ul>
            </section>
        </article>
    )
}
export default Resident