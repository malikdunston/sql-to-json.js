let tables = [{
		type: "institution",
		institution_id: 2,
		name_short: "Syracuse",
		chocolate: null
	},
	{
		type: "institution",
		institution_id: 1,
		name_short: "Tech",
		chocolate: null
	},
	{
		type: "institution",
		institution_id: 3,
		name_short: "Georgia State",
		chocolate: null
	},
	{
		type: "campus",
		campus_id: 1,
		institution_id: 2,
		name_short: "su-main",
		name_long: "Syracuse Main Campus",
		chocolate: null
	},
	{
		type: "campus",
		campus_id: 2,
		institution_id: 1,
		name_short: "gt-square",
		name_long: "Tech Square",
		chocolate: null
	},
	{
		type: "campus",
		campus_id: 3,
		institution_id: 1,
		name_short: "gt-lorraine",
		name_long: "Lorraine, FR",
		chocolate: 3
	},
	{
		type: "campus",
		campus_id: 4,
		institution_id: 2,
		name_short: "su-south",
		name_long: "South Campus",
		chocolate: 7
	},
	{
		type: "building",
		campus_id: 1,
		building_id: 1,
		name_short: "hendricks",
		name_long: "Hendricks Chapel",
		chocolate: 2000
	},
	{
		type: "building",
		campus_id: 2,
		building_id: 2,
		name_short: "coda",
		name_long: "CODA",
		chocolate: null
	},
	{
		type: "floor",
		floor_id: 1,
		floor_level: 0,
		building_id: 1,
		name_short: "First Floor",
		name_long: "Main Level",
		chocolate: null
	},
	{
		type: "floor",
		floor_id: 2,
		floor_level: 1,
		building_id: 1,
		name_short: "Second Floor",
		name_long: "Basement",
		chocolate: 1
	},
	{
		type: "room",
		room_id: 1,
		floor_id: 1,
		name_short: "Sanctuary",
		name_long: "Our Beautiful 500-seat sanctuary",
		chocolate: null
	},
	{
		type: "room",
		room_id: 2,
		floor_id: 1,
		name_short: "lobby",
		name_long: "Lobby",
		chocolate: 1
	},
];

let order = [
	["institutions", "institution", "institution_id"],
	["campuses", "campus", "campus_id"],
	["buildings", "building", "building_id"],
	["floors", "floor", "floor_id"],
	["rooms", "room", "room_id"]
];

let getData = (node, n) => {
	let thisTable = tables.filter(rowObj => rowObj.type == order[n][1]);
	for (i in thisTable) {
		let thisRow = thisTable[i];
		// any child tables?
		if (n == order.length - 1) {} else {
			// campuses equals array of campuses
			// where institution_id = thisNode.institution_id
			let matchTables = getData(thisRow, n + 1).filter(rowObj => rowObj[order[n][1] + "_id"] == thisRow[order[n][1] + "_id"]);
			thisRow[order[n + 1][0]] = matchTables;
		}
	}
	return thisTable
};

const model = getData({}, 0);
const view = document.querySelector(".json:nth-child(4) pre");
const viewModel = JSON.stringify(model, null, 3);

view.innerHTML = viewModel;