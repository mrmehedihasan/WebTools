
import { useEffect, useState } from "react"
import Card from "./Card"
function Body() {
  // const data = [
  //  {
  //     "img": "https://webdevresources.info/images/colors/colors-colorClaim-min.png",
  //     "name": "Color-Claim"
  //   },
  //  {
  //     "img": "https://webdevresources.info/images/colors/colors-flatUiColors-min.png",
  //     "name": "Flat UI Colors"
  //   }
  // ]
  

  const [getData, setData] = useState([]);
  
  useEffect( ()=> {
    fetch("http://127.0.0.1:5000/color").then(
      res => res.json()
    ).then( data=>{
        setData(data)
        console.log(data)
      }
    )
  }, [])
  
  return (
    <div className="main-content">
        <div className="main-content__title">
            <h1>Colors</h1>
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