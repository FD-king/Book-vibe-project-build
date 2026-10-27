import React from "react";

const BookCard = ({ book }) => {
  const tags = book.tags ?? [];

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden
      rounded-2xl border border-base-300/60 bg-base-100
      shadow-md transition-all duration-500
      hover:-translate-y-2 hover:border-primary/40
      hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Book cover */}
      <div className="relative overflow-hidden bg-base-200 p-5">
        <div
          className="pointer-events-none absolute inset-0
          bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
        />

        <div className="absolute left-4 top-4 z-10">
          <span
            className="rounded-full border border-white/30
            bg-base-100/80 px-3 py-1 text-xs font-semibold
            backdrop-blur-md"
          >
            {book.yearOfPublishing}
          </span>
        </div>

        <button
          type="button"
          aria-label={`Save ${book.bookName}`}
          className="absolute right-4 top-4 z-10 flex h-9 w-9
          items-center justify-center rounded-full
          bg-base-100/80 shadow-sm backdrop-blur-md
          transition hover:bg-primary hover:text-primary-content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4Z" />
          </svg>
        </button>

        <div
          className="relative mx-auto flex h-64 max-w-[190px]
          items-center justify-center"
        >
          <img
            src={book.image}
            alt={book.bookName}
            loading="lazy"
            className="h-full w-full rounded-md object-cover
            shadow-xl transition-transform duration-700
            group-hover:scale-105 group-hover:-rotate-1"
          />
        </div>
      </div>

      {/* Book details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className={`rounded-full px-3 py-1 text-xs font-medium
                ${
                  index === 0
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h2
          className="mb-2 line-clamp-2 text-xl font-bold
          leading-snug tracking-tight transition-colors
          group-hover:text-primary"
        >
          {book.bookName}
        </h2>

        <p
          className="mb-5 line-clamp-3 flex-1 text-sm
          leading-6 text-base-content/65"
        >
          {book.review}
        </p>

        <div className="mt-auto border-t border-base-300/70 pt-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <div
                className="flex h-9 w-9 shrink-0 items-center
                justify-center rounded-full bg-primary/10
                text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-xs text-base-content/50">Published</p>
                <p className="truncate text-sm font-semibold">
                  {book.yearOfPublishing}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-sm rounded-full
              px-4 transition-transform duration-300
              group-hover:scale-105"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
