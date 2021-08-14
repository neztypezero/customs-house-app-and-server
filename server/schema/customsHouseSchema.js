const graphql = require("graphql");

const { 
	GraphQLSchema, 
	GraphQLObjectType, 
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
} = graphql;

const RoomCount = require("../models/roomCount");

const RoomCountType = new GraphQLObjectType({
	name:'RoomCount',
	fields: () => ({
		id: { type: GraphQLID },
		count: { type: GraphQLInt },
		floorPlans: { 
			type: new GraphQLList(FloorPlanType),
			resolve(parent, args) {
				return FloorPlan.find({roomCount:parent.count});
			},
		},
	})
});

const RoomCollectionLevel = require("../models/roomCollectionLevel");

const RoomCollectionLevelType = new GraphQLObjectType({
	name:'RoomCollectionLevel',
	fields: () => ({
		id: { type: GraphQLID },
		roomCollectionId: { type: GraphQLID },
		level: { type: GraphQLInt },
		floorPlans: { 
			type: new GraphQLList(FloorPlanType),
			resolve(parent, args) {
				return FloorPlan.find({
					roomCollectionId:parent.roomCollectionId,
					level:parent.level,
				});
			},
		},
	})
});

const RoomCollection = require("../models/roomCollection");

const RoomCollectionType = new GraphQLObjectType({
	name:'RoomCollection',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		levels: { 
			type: new GraphQLList(RoomCollectionLevelType),
			resolve(parent, args) {
				return RoomCollectionLevel.find({roomCollectionId:parent.id});
			},
		},
	})
});

const FloorPlan = require("../models/floorPlan");

const FloorPlanType = new GraphQLObjectType({
	name:'FloorPlan',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		img: { type: GraphQLString },
		roomDescription: { type: GraphQLString },
		roomCount: { type: GraphQLInt },
		size: { type: GraphQLString },
		unit: { type: GraphQLInt },
		level: { type: GraphQLInt },
		roomCollection: { 
			type: RoomCollectionType,
			resolve(parent, args) {
				return RoomCollection.findById(parent.roomCollectionId);
			},
		},
	})
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: () => ({
		roomCollections: {
			type: new GraphQLList(RoomCollectionType),
			resolve(parent, args) {
				return RoomCollection.find({});
			}
		},
		floorPlanByRoomCollection: {
			type: RoomCollectionType,
			args: {roomCollectionId:{type:GraphQLID}},
			resolve(parent, args) {
				return RoomCollection.findById(args.roomCollectionId);
			}
		},
		floorPlan: { 
			type: FloorPlanType,
			args: {name:{type:GraphQLString}},
			resolve(parent, args) {
				return FloorPlan.find({name:args.name});
			}
		},
	})
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: () => ({
		addRoomCollectionLevel: { 
			type: RoomCollectionLevelType,
			args: {
				level:{type:new GraphQLNonNull(GraphQLInt)},
				roomCollectionId:{type:new GraphQLNonNull(GraphQLID)},
			},
			resolve(parent, args) {
				let roomCollectionLevel = new RoomCollectionLevel({
					level: args.level,
					roomCollectionId: args.roomCollectionId,
				});
				return roomCollectionLevel.save();
			}
		},
		addRoomCollection: { 
			type: RoomCollectionType,
			args: {
				name:{type:new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args) {
				let roomCollection = new RoomCollection({
					name: args.name,
				});
				return roomCollection.save();
			}
		},
		addFloorPlan: { 
			type: FloorPlanType,
			args: {
				name:{type:new GraphQLNonNull(GraphQLString)},
				img:{type:new GraphQLNonNull(GraphQLString)},
				roomDescription:{type:new GraphQLNonNull(GraphQLString)},
				roomCount:{type:new GraphQLNonNull(GraphQLInt)},
				size:{type:new GraphQLNonNull(GraphQLString)},
				unit:{type:new GraphQLNonNull(GraphQLInt)},
				level:{type:new GraphQLNonNull(GraphQLInt)},
				roomCollectionId:{type:new GraphQLNonNull(GraphQLID)},
			},
			resolve(parent, args) {
				let floorPlan = new FloorPlan({
					name: args.name,
					img: args.img,
					roomDescription: args.roomDescription,
					roomCount: args.roomCount,
					size: args.size,
					unit: args.unit,
					level: args.level,
					roomCollectionId: args.roomCollectionId,
				});
				return floorPlan.save();
			}
		},
	}),
});

/*
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




mutation {
  addFloorPlan(
    name:"A8", 
    img:"203.png", 
    roomDescription:"1 bedroom",
    roomCount: 1,
    size: "958 sq. ft. ext. 85 sq. ft.",
    unit: 203,
    level: 2,
    roomCollectionId: "6114ca55d325a91491085fcb"
  ) {
    id,
    name,
  }
}

*/

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});