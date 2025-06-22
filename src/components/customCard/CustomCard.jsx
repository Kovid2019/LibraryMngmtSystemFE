import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Library1 from "@assets/img/Library1.jpg";
import { Link } from "react-router-dom";

export const CustomCard = ({
  imgUrl = Library1,
  title = "Book Title",
  year = 2020,
  author = "James",
  slug = "book-title",
}) => {
  return (
    <Card style={{ width: "12rem" }}>
      <div className="m-2">
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
          height={200}
          className="rounded"
        />
      </div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
        <Link to={"/book/" + slug}>
          <Button variant="dark">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export const CustomListCard = ({
  imgUrl = Library1,
  title = "Book Title",
  year = 2020,
  author = "James",
  slug = "book-title",
  description,
}) => {
  return (
    <Card className="w-100">
      <div className="d-flex gap-3">
        <div className="m-2">
          <Card.Img
            variant="top"
            src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
            height={"200px"}
            className="rounded"
          />
        </div>
        <Card.Body className="">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 200)}...</Card.Text>
          <Card.Text>
            {author} - {year}
          </Card.Text>
          <Link to={"/book/" + slug} className="listView">
            <Button variant="dark">View Details</Button>
          </Link>
        </Card.Body>
      </div>
    </Card>
  );
};
