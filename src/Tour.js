import React, { useState } from 'react';

const Tour = ({id, name, image, price, info, removeTours}) => {
  const [more, setMore] = useState(false);

  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {more ? info : `${info.substring(0, 210)}`}
        <button onClick={() => setMore(!more)}>
          {more ? "show less" : "show more"}
        </button>
      </p>
      <button className="delete-btn" onClick={()=> removeTours(id)}>
        not interested
      </button>
    </footer>
  </article>
};

export default Tour;
