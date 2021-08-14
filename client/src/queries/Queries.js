import {
  gql,
} from "@apollo/client";

const QUERY_BOOK_LIST = gql`
{
	books {
		name,
		id,
	}
}
`;

const QUERY_AUTHOR_LIST = gql`
{
	authors {
		name,
		id,
	}
}
`;

const MUTATION_ADD_BOOK = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
			name,
			genre,
			id,
    }
  }
`;

const QUERY_ROOM_COLLECTIONS = gql`
{
  roomCollections {
    id
    name
    levels {
      id
      level
      floorPlans {
        id
        name
        img
        roomDescription
        roomCount
        size
        unit
        level
      }
    }
  }
}
`;

export {
	QUERY_BOOK_LIST,
	QUERY_AUTHOR_LIST,
	MUTATION_ADD_BOOK,
	QUERY_ROOM_COLLECTIONS,
}