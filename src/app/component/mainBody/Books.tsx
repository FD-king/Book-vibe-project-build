import BookCard from "./BookCard";

const getBooksData = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooksData();
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-3 container mx-auto"
    >
      {booksData.map((book, int) => {
        return <BookCard key={int} book={book}></BookCard>;
      })}
    </div>
  );
};

export default Books;
