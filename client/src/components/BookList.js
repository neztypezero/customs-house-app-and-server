import React from 'react';
import {
  useQuery,
} from "@apollo/client";

import { QUERY_BOOK_LIST } from "../queries/Queries";

function BookList() {
  const { loading, error, data } = useQuery(QUERY_BOOK_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
		<div>
			<ul id="book-list">
			{data.books.map((book) => (
				<li key={book.id}>{book.name}</li>
			))}
			</ul>
		</div>
  );
}

export default BookList;