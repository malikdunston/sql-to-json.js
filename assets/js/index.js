
// let x = [
// 	sql_json.databases[0].tables, 
// 	sql_json.databases[1].tables
// ];

let searchByDataBase = (term, arr = []) => {
	let databases = sql_json.databases.filter(
		db => db.title == term
	);
	databases.forEach(
		database => arr.push(database.tables)
	);
	return arr
}


let getSql = (x) => {
	let sql = {
		structure: sql_json.selectTables(x),
		data: sql_json.allRows(sql_json.selectTables(x))
	}
	return sql
}

let inject = (sql) => {
	const model = sql_json.getJSON(sql.structure, sql.data);
	const view = document.querySelector(".json pre");
	const viewModel = JSON.stringify(model, null, 3);
	view.innerHTML = viewModel;
};




// index stuff



// let run = (settings) => {


	inject(getSql(searchByDataBase("campuses")));
	// inject(getSql(searchByDataBase("orgs")));


// }

// run(x);

// ideal use:

// run(
// 	{

// 	}
// );