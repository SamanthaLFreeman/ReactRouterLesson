import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';
import Details from './Details'

const Creatures = ({ data }) => {
  const displayCreatures = data.map(creature => {
    const { id, image, name, type } = creature;
    return <Link to={`/${type}/${id}`} key={id} ><img src={image} alt={name} className='app-img' key={name} /></Link>
  })
  const type = data[0].type
  return (
    <div>
      <Link to={'/'} className='back-btn'>◀ back</Link>
      <h1>{type}</h1>
      {displayCreatures}
    </div>
  )
}

export default Creatures;
