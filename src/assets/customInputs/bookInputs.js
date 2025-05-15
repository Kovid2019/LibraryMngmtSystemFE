export const newBookInputs = [
  {
    label: "Title",
    name: "title",
    type: "text",
    required: true,
    placeholder: "JavaScript: The Good Parts",
  },
  {
    label: "Year",
    name: "year",
    type: "Number",
    min: "1901",
    max: new Date().getFullYear(),
    required: true,
    placeholder: "2025",
  },
  {
    label: "Author",
    name: "author",
    type: "text",
    required: true,
    placeholder: "Douglas Crockford",
  },
  {
    label: "Image Url",
    name: "imgUrl",
    type: "url",
    placeholder: "https://example.com/image.jpg",
  },
  {
    label: "ISBN*",
    name: "isbn",
    type: "number",
    required: true,
    placeholder: "1234556789",
  },

  {
    label: "Genre",
    name: "genre",
    type: "text",
    required: true,
    placeholder: "Education",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    as: "textarea",
    required: true,
    placeholder: "Book description",
  },
];
