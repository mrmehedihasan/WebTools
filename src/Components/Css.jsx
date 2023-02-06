
import { useEffect, useState } from "react"
import Card from "./Card"
function Body({prop}) {
  const [getData, setData] = useState([]);
  useEffect( ()=> {
    fetch("http://127.0.0.1:5000/css").then(
      res => res.json()
    ).then( data=>{
        setData(data)
      }
    )
  }, [])
  
  return (
    <div className="main-content">
        <div className="main-content__title">
            <h1>CSS</h1>
        </div>
        <div className="main-content__cards-view">
           {getData.map( (d, i) => {
            return <Card prop={d} key={i}/>
          } )}
        </div>
    </div>
  )
}

export default Body