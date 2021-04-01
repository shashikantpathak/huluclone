import React, { forwardRef } from 'react'
import "../css/VideoCard.css"
import ThumbUpSharp from "@material-ui/icons/ThumbUpSharp"


const base_url = "https://image.tmdb.org/t/p/original/"
const imagesrc = "https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg"
const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div className="videoCard" ref={ref}>
            <img src={`${(movie.backdrop_path !== null || movie.poster_path !== null) ? base_url + movie.backdrop_path || movie.poster_path : imagesrc}`} alt="videocard" />
            <p className="movie-overview">{movie.overview.substr(0, 80)}...</p>
            <h2 className="movie-overview">{movie.original_title || movie.title || movie.original_name}</h2>
            <h2 className="videoCard_stats">
                <small> {movie.media_type?movie.media_type:movie.vote_average}</small>
                <small> {movie.release_date || movie.first_air_date}</small>
                <small className="likes">
                    <ThumbUpSharp />
                    <p> {movie.vote_count}</p>
                </small>
            </h2>
        </div>
    )
})

export default VideoCard
