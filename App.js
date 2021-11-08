import React, { useEffect, useState } from 'react';
import './App.css';

import Data from './API/Data.js';
import MovieRow from './components/MovieRow/MovieRow.js'; 
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Loading from './components/Loading/Loading.js';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {

    async function loadAll() {

      //get all List
      let list = await Data.getHomeList();
      setMovieList(list);

      //get featuredMovie
      let originalsMovies = list.filter(movie => movie.slug === 'originals');
      let randomNumber = Math.floor(Math.random() * (originalsMovies[0].items.results.length - 1));
      let movie = originalsMovies[0].items.results[randomNumber];
      let choosenMovieInfo = await Data.getMovieInfo(movie.id, 'tv');
      setfeaturedData(choosenMovieInfo);
    }
    
    loadAll();
  }, []);

  useEffect(() => {

    function scrooListener() {
      if(window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    }

    document.addEventListener('scroll', scrooListener);
    return () => document.removeEventListener('scroll', scrooListener);
  }, [])

  return (
    <div className="page">

      {/* Header */}
      <Header background={blackHeader}/>
      
      {/* featured Movie */}
      { featuredData && <FeaturedMovie item={featuredData}/> }

      {/* List of Movies */}
      <div className="lists">
        {movieList.map((item, key) => (
          <MovieRow 
            key={key} 
            title={item.title} 
            items={item.items}
          />
        ))}
      </div>

      <Footer/>

      {/* This show Spinner if moveList has been with data */}
      {movieList <= 0 && <Loading/>}
    </div>
  );
}

export default App;
