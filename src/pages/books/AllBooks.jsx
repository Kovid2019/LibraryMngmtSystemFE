import { BookListing } from "@components/bookListing/BookListing";

import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllBooks = () => {
  //   const [searchParams, setSearParams] = useSearchParams();
  //   const s = searchParams.get("s");
  //   const filteredBook = s ? "TODO : Filter through book title" : publicBooks;
  const { publicBooks } = useSelector((state) => state.bookInfo);

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
          </Breadcrumb>
        </Col>
      </Row>

      <BookListing bookList={publicBooks} />
    </Container>
  );
};

export default AllBooks;
