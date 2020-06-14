let service = {
	source: data,
	databases: [
		{
			title: "orgs",
			tables: [
				["institutions", "institution_id"],
				["campuses", "campus_id"]
			]
		},
		{
			title: "campuses",
			tables: [
				["buildings", "building_id"],
				// ["floors", "floor_id"],
				// ["rooms", "room_id"]
			]
		},
		{
			title: "buildings",
			tables: [
				// ["buildings", "building_id"],
				["floors", "floor_id"],
				["rooms", "room_id"]
			]
		},
	],
	allRows(selected, arr = []){
		selected.forEach(function(table){
			arr.push(service.source[table[0]]);
		});
		return arr.flat();
	},
	getJSON(order, allRows, n = 0, d = 1, node = {}) {
		if (!order) {
			return "no data :("
		}
		let thisTable = allRows.filter(rowObj => rowObj.table == order[n][0]);
		if (n == order.length - d) {} else {
			thisTable.forEach(function (thisRow) {
				thisRow[order[n + 1][0]] = window.sql_json.getJSON(
					order, allRows, n + 1, d, thisRow
				).filter(rowObj => rowObj[order[n][1]] == thisRow[order[n][1]]);
			});
		}
		return thisTable
	}
};
window.sql_json = service;
const sql_json = window.sql_json;
