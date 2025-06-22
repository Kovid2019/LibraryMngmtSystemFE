import { Star } from "@components/star/Star";
import { formatDistance, formatDistanceToNow, subDays } from "date-fns";
const reviews = [
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consequatur quasi! Sequi blanditiis perspiciatis repellendus voluptates quam! Magnam, minus explicabo totam quasi reiciendis, modi enim autem quae neque facilis distinctio?",
    reviewedBy: "Prem Acharya",
    createdAt: "2025-02-20",
  },
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consequatur quasi! Sequi blanditiis perspiciatis repellendus voluptates quam! Magnam, minus explicabo totam quasi reiciendis, modi enim autem quae neque facilis distinctio?",
    reviewedBy: "Prem Acharya",
    createdAt: "2020-2-20",
  },
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consequatur quasi! Sequi blanditiis perspiciatis repellendus voluptates quam! Magnam, minus explicabo totam quasi reiciendis, modi enim autem quae neque facilis distinctio?",
    reviewedBy: "Prem Acharya",
    createdAt: "2020-2-20",
  },
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consequatur quasi! Sequi blanditiis perspiciatis repellendus voluptates quam! Magnam, minus explicabo totam quasi reiciendis, modi enim autem quae neque facilis distinctio?",
    reviewedBy: "Prem Acharya",
    createdAt: "2020-2-20",
  },
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consequatur quasi! Sequi blanditiis perspiciatis repellendus voluptates quam! Magnam, minus explicabo totam quasi reiciendis, modi enim autem quae neque facilis distinctio?",
    reviewedBy: "Prem Acharya",
    createdAt: "2020-2-20",
  },
];
export const Reviews = () => {
  return (
    <div className="reviews-tab">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="border rounded p-3 shadow-lg d-flex review-item gap-3"
        >
          <div className="left d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center fs-3 fw-bold ">
              PA{" "}
            </div>
          </div>
          <div className="right">
            <h3>{r.title}</h3>
            <div className="d-flex gap-3">
              <Star avgRating={r.rating} />
              <span>
                {" "}
                {formatDistanceToNow(new Date(r.createdAt), {
                  addSuffix: true,
                })}{" "}
              </span>{" "}
            </div>
            <p>{r.details}</p>
            <div className="text-end">- {r.reviewedBy}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
