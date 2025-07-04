import { fetchSinglePublicBookAction } from "@features/book/bookAction";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { Star } from "@components/star/Star";
import { Reviews } from "@components/reviews/Reviews";
import { setCart } from "@features/cart/cartSlice";

const BookLandingPage = () => {
  const { slug } = useParams();
  const { selectedBook } = useSelector((state) => state.bookInfo);
  const { cart } = useSelector((state) => state.cartInfo);

  const dispatch = useDispatch();
  const [showUrl, setShowUrl] = useState(0);

  useEffect(() => {
    // First approach : Locally
    // const selectedBook = publicBooks?.find((book) => book.slug === slug);
    // setBook(selectedBook);

    //Second Approach : Fetch from server live.

    dispatch(fetchSinglePublicBookAction(slug));
  }, [dispatch, slug]);

  const handleOnAddToCart = () => {
    dispatch(setCart(selectedBook));
  };

  const isBookInTheCart = cart.find((item) => item._id === selectedBook._id);

  return (
    <Container>
      <Row className="my-3">
        {" "}
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{selectedBook.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      {!selectedBook?._id && (
        <Row>
          <Col>
            <Alert variant="danger">
              This book is not available, please contact admin!
            </Alert>
          </Col>
        </Row>
      )}
      <>
        {selectedBook?._id && (
          <>
            <Row>
              <Col md={4}>
                <div className="mb-4" style={{ height: "300px" }}>
                  <img
                    src={
                      import.meta.env.VITE_BASE_API_URL +
                      selectedBook?.imageList[showUrl].slice(6)
                    }
                    alt={selectedBook.title}
                    // width={"100%"}
                    className="h-100 w-100 object-fit-contain"
                  />
                </div>
                {/* Scrollable Thumbnail */}
                <div className="d-flex overflow-auto gap-2 py-3">
                  {selectedBook.imageList?.map((url, i) => (
                    <img
                      src={import.meta.env.VITE_BASE_API_URL + url.slice(6)}
                      key={url}
                      width={"80px"}
                      className="img-thumbnail"
                      onClick={() => setShowUrl(i)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>
              </Col>
              <Col>
                <div className="d-flex h-100 flex-column justify-content-between ">
                  <div className="top">
                    <h1>{selectedBook.title}</h1>
                    <div className="fw-bolder">
                      {selectedBook.author} - {selectedBook.year}
                    </div>

                    <div className="my-2 d-flex gap-2">
                      <span>{selectedBook.genre}</span> |{" "}
                      <Star avgRating={1.5} totalReviews={55} />
                      {"  "}
                    </div>
                    <div>{selectedBook.description.slice(0, 300)}...</div>
                  </div>
                  <div className="bottom">
                    <hr />
                    <Button
                      variant="dark"
                      onClick={handleOnAddToCart}
                      disabled={isBookInTheCart}
                    >
                      {isBookInTheCart
                        ? "Book is already in the cart"
                        : "Add to Borrowing List"}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="my-5">
              <Col className="border p-3 rounded">
                <h3 className="margin-auto mt-5 text-center">More Details </h3>

                <Tabs
                  defaultActiveKey="description"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="description" title="Description">
                    <div>{selectedBook.description}</div>
                  </Tab>
                  <Tab eventKey="reviews" title="Reviews">
                    <Reviews />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </>
        )}
      </>
    </Container>
  );
};

export default BookLandingPage;
