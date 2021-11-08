import React, { useState }from 'react';
import './MovieRow.css';

export default ({title, items}) => {

  const[scrollx, setScrollx] = useState(0);

  function handleLeftArrow() { 
    let x = scrollx + Math.round(window.innerWidth / 4); // 25% of screen´s user size
    if(x > 0) x = 0;
    setScrollx(x);
  };

  function handleRightArrow() {
    let x = scrollx - Math.round(window.innerWidth / 4); // 25% of screen´s user size
    let listW = items.results.length * 150; // Size of list 150 is equal to each width´s card
    
    if(window.innerWidth - listW > x){
      x = (window.innerWidth - listW) - 60;
    }
    
    setScrollx(x);
  }

  return(
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="arrow-left" onClick={handleLeftArrow}><i className="fas fa-chevron-left"></i></div>
      <div className="arrow-right" onClick={handleRightArrow}><i className="fas fa-chevron-right"></i></div>
      
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{ 
          marginLeft: scrollx,
          width: items.results.length * 150,
          }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div className="movieRow--item" key={key} >
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/> 
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

