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
		roomCollectionDescription: { type: GraphQLString },
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
		roomCollectionsByName: {
			type: new GraphQLList(RoomCollectionType),
			args: {name:{type:GraphQLString}},
			resolve(parent, args) {
				return RoomCollection.find({name:args.name});
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
				roomCollectionDescription:{type:GraphQLString},
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
					roomCollectionDescription: args.roomCollectionDescription,
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
        isPremium
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
		roomCount:1,
		size:"958 sq. ft. ext. 85 sq. ft.",
		unit:203,
		level:2,
		roomCollectionId:"6114ca55d325a91491085fcb",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"B3",
		img:"204.png",
		roomDescription:"1 bedroom & den",
		roomCount:1,
		size:"947 sq. ft.",
		unit:204,
		level:2,
		roomCollectionId:"6114ca55d325a91491085fcb",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"B4",
		img:"205.png",
		roomDescription:"1 bedroom & den",
		roomCount:1,
		size:"950 sq. ft.",
		unit:205,
		level:2,
		roomCollectionId:"6114ca55d325a91491085fcb",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"D2L",
		img:"213.png",
		roomDescription:"2 bedroom/lockoff",
		roomCount:2,
		size:"1435 sq. ft.",
		unit:213,
		level:2,
		roomCollectionId:"6114ca55d325a91491085fcb",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"D1L",
		img:"313.png",
		roomDescription:"2 bedroom/lockoff",
		roomCount:2,
		size:"1372 sq. ft.",
		unit:313,
		level:3,
		roomCollectionId:"6114ca55d325a91491085fcb",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"E1",
		img:"403.png",
		roomDescription:"2 bedroom & den",
		roomCount:2,
		size:"1423 sq. ft. | ext. 74 sq. ft.",
		unit:403,
		level:4,
		roomCollectionId:"6114ca55d325a91491085fcb",
		roomCollectionDescription:"Urban Collection Premium",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"C6",
		img:"404.png",
		roomDescription:"2 bedroom",
		roomCount:2,
		size:"1281 sq. ft. | ext. 145 sq. ft.",
		unit:404,
		level:4,
		roomCollectionId:"6114ca55d325a91491085fcb",
		roomCollectionDescription:"Urban Collection Premium",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"C5",
		img:"502.png",
		roomDescription:"2 bedroom",
		roomCount:2,
		size:"1220 sq. ft. | ext. 74 sq. ft.",
		unit:502,
		level:5,
		roomCollectionId:"6114ca55d325a91491085fcb",
		roomCollectionDescription:"Urban Collection Premium",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"C4",
		img:"603.png",
		roomDescription:"2 bedroom",
		roomCount:2,
		size:"1196 sq. ft. | ext. 228 sq. ft.",
		unit:603,
		level:6,
		roomCollectionId:"6114ca55d325a91491085fcb",
		roomCollectionDescription:"Urban Collection Premium",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"PH1",
		img:"701.png",
		roomDescription:"3 bedroom & family",
		roomCount:3,
		size:"3531 sq. ft. | ext. 548 sq. ft.<br>roof deck 1520 sq. ft.",
		unit:701,
		level:7,
		roomCollectionId:"6114ca55d325a91491085fcb",
		roomCollectionDescription:"Penthouse Collection",
	) {
		id,
		name,
	}
}

mutation {
	addFloorPlan(
		name:"PH2",
		img:"702.png",
		roomDescription:"3 bedroom & den & family",
		roomCount:3,
		size:"4422 sq. ft. | ext. 596 sq. ft.<br>roof deck 1990 sq. ft.",
		unit:702,
		level:7,
		roomCollectionId:"6114ca55d325a91491085fcb",
		roomCollectionDescription:"Penthouse Collection",
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