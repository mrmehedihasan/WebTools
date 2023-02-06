function Card() {
  
  return (
    <div className="card__main">
      <div className="card__main__figure">
        <img style={{padding : '10px', borderRadius: '20px'}} src="assets/color-claim.png" alt="" />
      </div>
      <div className="card__main__title">
        <h3>Color Claim</h3>
        <p>Some Description</p>
      </div>
    </div>
  )
}

export default Card