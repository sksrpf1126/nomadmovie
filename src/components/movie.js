import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './movie.css'

function Movie({year, title, summary, poster, genres}){

    

    return(
        <Link to={{
            pathname : 'movie-detail',
            state : { //이렇게 해도 year: year, title : title, ....이랑 같네?! 대박
                year,
                title,
                summary,
                poster,
                genres
            }   
        }}>
            <div className = "movie">
                <div className = "movie__data">
                    <img src = {poster} alt = {title} title = {title}></img>
                    <h3 className = "movie__title">{title}</h3>
                    <h5 className = "movie__year">{year}</h5>
                    <ul className = "movie__genres">
                        {genres.map((genre, index)=>{
                            return<li key = {index} className = "genres__genre">{genre}</li>
                        })}
                    </ul>
                    <p className = "moive__summary">{summary.slice(0,180)}</p>

                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default Movie;