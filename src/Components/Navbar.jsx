import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
        <nav className="main-nav">
            <ul>
                <li><Link to='/colors'>Colors</Link></li>
                <li><a href="#">Image</a></li>
                <li><a href="#">Backgrounds</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">HTML</a></li>
                <li><a href="#">Inspiration</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">Article</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar