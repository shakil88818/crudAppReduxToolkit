import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.jsx"
import Error from "../pages/Error.jsx"
import ShowBooks from "../features/books/ShowBooks.jsx"
import AddBooks from "../features/books/AddBooks.jsx"
import Navbar from "../components/Navbar.jsx"
import EditBook from "../features/books/EditBook.jsx"



const routes = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/showbooks" element={<ShowBooks />} />
            <Route path="/editbooks" element={<EditBook/>} />
            <Route path="/addbooks" element={<AddBooks />} />
        </Routes>
        </main>

    </BrowserRouter>
  )
}

export default routes
