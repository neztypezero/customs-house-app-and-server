import {
  gql,
} from "@apollo/client";

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
        roomCollectionDescription
      }
    }
  }
}
`;

const QUERY_ROOM_COLLECTIONS_BY_NAME = gql`
query RoomCollections($name: String!) {
  roomCollections: roomCollectionsByName(name:$name) {
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
        roomCollectionDescription
      }
    }
  }
}
`;

export {
  QUERY_ROOM_COLLECTIONS,
  QUERY_ROOM_COLLECTIONS_BY_NAME,
}