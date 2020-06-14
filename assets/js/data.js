let data = {
	institutions: [
		{
			table: "institutions",
			institution_id: 2,
			name_short: "Syracuse",
			chocolate: null
		},
		{
			table: "institutions",
			institution_id: 1,
			name_short: "Tech",
			chocolate: null
		},
		{
			table: "institutions",
			institution_id: 3,
			name_short: "Georgia State",
			chocolate: null
		},
	],
	campuses: [
		{
			table: "campuses",
			campus_id: 1,
			institution_id: 2,
			name_short: "su-main",
			name_long: "Syracuse Main Campus",
			chocolate: null
		},
		{
			table: "campuses",
			campus_id: 2,
			institution_id: 1,
			name_short: "gt-square",
			name_long: "Tech Square",
			chocolate: null
		},
		{
			table: "campuses",
			campus_id: 3,
			institution_id: 1,
			name_short: "gt-lorraine",
			name_long: "Lorraine, FR",
			chocolate: 3
		},
		{
			table: "campuses",
			campus_id: 4,
			institution_id: 2,
			name_short: "su-south",
			name_long: "South Campus",
			chocolate: 7
		},
	],
	buildings: [
		{
			table: "buildings",
			campus_id: 1,
			building_id: 1,
			name_short: "hendricks",
			name_long: "Hendricks Chapel",
			chocolate: 2000
		},
		{
			table: "buildings",
			campus_id: 2,
			building_id: 2,
			name_short: "coda",
			name_long: "CODA",
			chocolate: null
		},
	],
	floors: [
		{
			table: "floors",
			floor_id: 1,
			floor_level: 0,
			building_id: 1,
			name_short: "First Floor",
			name_long: "Main Level",
			chocolate: null
		},
		{
			table: "floors",
			floor_id: 2,
			floor_level: 1,
			building_id: 1,
			name_short: "Second Floor",
			name_long: "Basement",
			chocolate: 1
		},
	],
	rooms: [
		{
			table: "rooms",
			room_id: 1,
			floor_id: 1,
			name_short: "Sanctuary",
			name_long: "Our Beautiful 500-seat sanctuary",
			chocolate: null
		},
		{
			table: "rooms",
			room_id: 2,
			floor_id: 1,
			name_short: "lobby",
			name_long: "Lobby",
			chocolate: 1
		},
		{
			table: "rooms",
			room_id: 3,
			floor_id: 0,
			name_short: "kitchen",
			name_long: "Kitchen",
			chocolate: 1
		},
	],
	sql_to_json: {
		stuff: 7,
		newStuff(){
			console.log(this.stuff);	
		},
		tables(selectedTables, arr = []){
			selectedTables.forEach(function(level){
				arr.push(data[level[0]]);
			});
			return arr.flat();
		}
	}
}