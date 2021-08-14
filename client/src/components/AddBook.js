import { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_AUTHOR_LIST, MUTATION_ADD_BOOK, QUERY_BOOK_LIST } from "../queries/Queries";

function AddBook() {
	const [name, setName] = useState("");
	const [genre, setGenre] = useState("");
	const [authorId, setAuthorId] = useState("");
	const { loading, error, data } = useQuery(QUERY_AUTHOR_LIST);
	const [addBook] = useMutation(MUTATION_ADD_BOOK, {
		refetchQueries: [
			QUERY_BOOK_LIST,
		],
	});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
		<form onSubmit={(e) => {
				e.preventDefault();
				addBook({ variables: { name, genre, authorId } });
			}}>
			<div className="field-row">
				<label>Book Name:</label>
				<input type="text" onChange={(e) => setName(e.target.value) } />
			</div>
			<div className="field-row">
				<label>Genre:</label>
				<input type="text" onChange={(e) => setGenre(e.target.value) } />
			</div>
			<div className="field-row">
				<label>Author:</label>
				<select onChange={(e) => setAuthorId(e.target.value) }>
					<option>Select Author</option>
					{data.authors.map((author) => (
						<option key={author.id} value={author.id}>{author.name}</option>
					))}
				</select>
			</div>

			<button>+</button>
		</form>
  );
}

export default AddBook;