import React, { useState, useEffect } from 'react'
import "../css/Results.css"
import VideoCard from './VideoCard'
import axios from '../endpoint/axios'
import FlipMove from 'react-flip-move';


function Results({ selectedOption }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [selectedOption])

    return (

        <div className="results">
            <FlipMove >
                {movies.map(movie => {
                    return <VideoCard movie={movie} key={movie.id} />
                })}
            </FlipMove>

        </div>
    )
}

export default Results
