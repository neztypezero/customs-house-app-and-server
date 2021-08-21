import {
  gql,
} from "@apollo/client";

const QUERY_GALLERY_BY_NAME = gql`
query GalleryByName($name: String!) {
  galleries: galleriesByName(name:$name) {
    id,
    name,
    images {
      src,
      alt
    }
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

const QUERY_ROOMS_BY_SUITE_TYPE = gql`
{
  levels: roomsBySuiteType {
    id
    count
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
`;

export {
  QUERY_GALLERY_BY_NAME,
  QUERY_ROOM_COLLECTIONS,
  QUERY_ROOM_COLLECTIONS_BY_NAME,
  QUERY_ROOMS_BY_SUITE_TYPE,
}