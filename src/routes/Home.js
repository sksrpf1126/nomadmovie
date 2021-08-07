import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/movie';
import './Home.css'

function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);


  const getMovies =async () =>{
    //아래 es6문법. movies.data.data.movies에 접근한 값임 ㄷㄷ
    const {data : {data : {movies}}} = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');
    console.log(movies);
    setMovies(movies); //렌더링 + 1번
    setIsLoading(false); //이러면 movies data를 가져오는 동안에는 loading 중이었다가, 가져왔을 경우 안보이게 함. 렌더링 + 1번
  }

  //componentDidMount 역할
  useEffect(() =>{
    getMovies();
  }, [])

  console.log("render 실행");
  return (
    <section className = "container">
     {isLoading ? 
     <div className = "loader">
       <span className = "loader_text">Loading...</span>
     </div> : 
     <div className = "movies">
       {movies.map((movie) =>{
          return <Movie
          key = {movie.id} 
          //id = {movie.id} 넣을 필요가 없남
          year = {movie.year} 
          title = {movie.title} 
          summary = {movie.summary} 
          poster = {movie.medium_cover_image}
          genres = {movie.genres}/>;
        })}
     </div>
       }
    </section>
  );
}

export default Home;
