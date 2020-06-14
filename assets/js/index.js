// sql-to-json -- data conversion service

	let otherOrder = [
		["institutions", "institution_id"],
		["campuses", "campus_id"]
	];

	let order = [
		["institutions", "institution_id"],
		["campuses", "campus_id"],
		["buildings", "building_id"],
		["floors", "floor_id"],
		["rooms", "room_id"]
	];

	let tables = data.sql_to_json.tables(order);
	console.log(tables);

	let getData = (n = 0, d = 1, node = {}) => {
		let thisTable = tables.filter(rowObj => rowObj.table == order[n][0]);
		if (n == order.length - d) {
		} else {
			thisTable.forEach(function(thisRow){
				thisRow[order[n + 1][0]] = getData(n + 1, d, thisRow
				).filter(rowObj => rowObj[order[n][1]] == thisRow[order[n][1]]);
			});
		}
		return thisTable
	};

// index.js -- build the view

	const model = getData();
	const view = document.querySelector(".json pre");
	const viewModel = JSON.stringify(model, null, 3);

	view.innerHTML = viewModel;


	let model2 = getData(1, 1);
	console.dir(tables, data);

	console.dir(model2);