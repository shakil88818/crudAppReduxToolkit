import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="navBox">
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/showbooks">ShowBooks</Link>
        <Link className="navLink" to="/addbooks">AddBooks</Link>
      </div>
    </>
  )
}

export default Navbar
