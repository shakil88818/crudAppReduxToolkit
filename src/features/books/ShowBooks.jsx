import { useDispatch, useSelector } from "react-redux"
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";


const ShowBooks = () => {
  const books = useSelector((state)=> state.bookReducer.books);
  const dispatch = useDispatch()
  console.log(books)

  const handleDelete =(id)=>{
    dispatch(deleteBook(id))
  }
  
  return (
    <>
      <div>
          <h2>List of Books</h2>
          <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {books && 
                  books.map((book)=>{
                    const {id, title, author} =book
                    return(
                      <tr key={id}>
                        <td>{title}</td>
                        <td>{author}</td>
                        <td>
                          <Link to="/editbooks" state={{ id, title, author }}>
                            <button>Edit</button>
                          </Link>
                          <button onClick={()=> handleDelete(id)}>Delete</button>
                        </td>

                      </tr>
                    )
                  })
                }
              </tbody>
          </table>

      </div>
      
    </>
  )
}

export default ShowBooks
