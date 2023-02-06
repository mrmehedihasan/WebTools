function Card({prop}) {
  
  return (
    <div className="card__main">
      <div className="card__main__figure">
        <img style={{padding : '10px', borderRadius: '20px'}} src={prop.img} alt="" />
      </div>
      <div className="card__main__title">
        <h3>{prop.name}</h3>
        <p>Some Description</p>
      </div>
    </div>
  )
}

export default Card