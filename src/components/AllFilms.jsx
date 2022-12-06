import React from 'react'
import {dbFilms} from "../db/films"

export const AllFilms = () => {
    const [films, setFilms] = useState([])

  return (
    <div className={"container"}>
        <div className={"row row-cols-auto"}> 
            {films.map(film => {
                return <Film />
            })}

        </div>
    </div>
  )
}
