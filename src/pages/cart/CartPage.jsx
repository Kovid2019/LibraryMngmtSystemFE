import { removeBookFromCart } from "@features/cart/cartSlice";
import { Alert, Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { removeBookFromCart } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);

  const handleOnBookRemove = (_id) => {
    dispatch(removeBookFromCart(_id));
  };
  const handleOnBorrow = () => {
    if (confirm("Are you sure, you want to borrow the books ?")) {
      //TODO
      // 1. Have a API to send send user and cart book list to create new borrowing transaction in the database.
      // 2. Clear cart state
      // 3. Send user to Thank You page.
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="py-5">My Borrowing List </h1>
          <div>
            <Table striped bordered hover>
              <tbody>
                {cart.map((book) => (
                  <tr key={book._id}>
                    <td>
                      <img
                        src={
                          import.meta.env.VITE_BASE_API_URL +
                          book.imgUrl.slice(6)
                        }
                        alt=""
                        width="60px"
                      />
                    </td>
                    <td>{book.title}</td>
                    <td>Returning : 15-03-2023</td>
                    <td>
                      <Button onClick={() => handleOnBookRemove(book._id)}>
                        {" "}
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {cart.length > 0 ? (
              <div className="text-end">
                {user._id ? (
                  <Button variant="secondary" onClick={handleOnBorrow}>
                    Proceed to Borrow
                  </Button>
                ) : (
                  <Link to="/login" state={{ from: "/cart" }}>
                    <Button variant="secondary">Login to Borrow</Button>
                  </Link>
                )}
              </div>
            ) : (
              <Alert variant="info">No Book is in the cart </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
