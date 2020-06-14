
// let x = [
// 	sql_json.databases[0].tables, 
// 	sql_json.databases[1].tables
// ];

let searchByDb = (term, arr = []) => {
	let allResults = sql_json.databases;
	if(term){
		allResults = sql_json.databases.filter(
			db => db.title == term
		);
	}

	allResults.forEach(
		result => arr.push(result.tables)
	);

	let allRows = (arr) => {
		let sql = {
			structure: arr.flat(),
		}

		sql.data = sql_json.allRows(sql.structure)
		// sql.data = [];

		// sql.structure
		// .forEach(function(database){
		// 	sql.data.push(sql_json.databases[term]);
		// 	console.log(database, sql);;
		// });

		return sql
	}

	return allRows(arr)
}
console.log(searchByDb("campuses"));

let searchByTable = (term, arr = []) => {
	let allResults = sql_json.source;
	if(term){
		let dump = allResults[term];
		dump.forEach(
			database => arr.push(database)
		);
	}
	return arr
}
console.log(searchByTable("floors"));







// framework

let inject = (sql) => {
	const model = sql_json.getJSON(sql.structure, sql.data);
	const view = document.querySelector(".json pre");
	const viewModel = JSON.stringify(model, null, 3);
	view.innerHTML = viewModel;
};




// index stuff



// let run = (settings) => {

// search by table
	// inject(searchByTable("floors"));
	// inject(getSql(searchByTable("floors")));
// search by db
	inject(searchByDb());
	// inject(allRows(searchByDb()));
	// inject(getSql(searchByDb("campuses")));
	// inject(getSql(searchByDataBase("orgs")));


// }

// run(x);

// ideal use:

// run(
// 	{

// 	}
// );