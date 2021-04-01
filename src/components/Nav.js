import React from 'react'
import "../css/Nav.css"
import { requests } from '../endpoint/requests'

function Nav({setSelectedOption}) {
    
    return (
        <div className="nav">
            <h2 onClick={()=>setSelectedOption(requests.trending)}>Trending</h2>
            <h2 onClick={()=>setSelectedOption(requests.TopRated)}>Top Rated</h2>
            <h2 onClick={()=>setSelectedOption(requests.actionMovies)}>Action</h2>
            <h2 onClick={()=>setSelectedOption(requests.comedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setSelectedOption(requests.horrorMovies)}>Horror</h2>
            <h2 onClick={()=>setSelectedOption(requests.Romance)}>Romance</h2>
            <h2 onClick={()=>setSelectedOption(requests.SciFicMovies)}>Sci-Fic</h2>
            <h2 onClick={()=>setSelectedOption(requests.Western)}>Western</h2>
            <h2 onClick={()=>setSelectedOption(requests.Animation)}>Animation</h2>
            <h2 onClick={()=>setSelectedOption(requests.TVShows)}>TV Movie</h2>

        </div>
    )
}

export default Nav
