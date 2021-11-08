import React from 'react';
import './FeaturedMovie.css'

export default function({ item }) {

  //get date of movie/serie
  const date = new Date(item.first_air_date);
  
  //get All genres of movie/serie
  const genres = [];
  item.genres.forEach(item => {
    genres.push(item.name);
  })

  return(
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}> 
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--movie">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
              <div className="featured--info-score">{item.vote_average} pontos</div>
              <div className="featured--info-year"> {date.getFullYear()} </div>
              <div className="featured--info-seasons">
                {item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}
              </div>
            </div>
            <div className="featured--description">
              {item.overview.length < 170 ? item.overview : `${item.overview.substring(0, 170)}...`}
            </div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`}><i className="fas fa-play"></i> &nbsp;Assistir</a>
              <a href={`/info/${item.id}`}><i className="fas fa-info-circle"></i> &nbsp;Mais Informações</a>
            </div>
            <div className="featured--subject">Gêneros: {genres.join(', ')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}