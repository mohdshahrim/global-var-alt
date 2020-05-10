// YUI method
var tehee = (function() {
	var defaultData = {
		"owner": "Shahrim",
		"age": 26,
		"cars": [
			{"make": "Proton", "model": "Saga", "color": "red"},
			{"make": "Perodua", "model": "Viva", "color": "black"},
		]
	};

	return {
		start: function() {
			this.deleteRow();
			this.populateForm();
		},
		populateForm: function() {
			document.getElementById('input-owner').value = defaultData.owner;
			document.getElementById('input-age').value = defaultData.age;
		
			var car_count = defaultData.cars.length;
			var table = document.getElementById('table-form');
		
			for (i=0; i<car_count; i++) {
				this.generateRow((i+1), defaultData.cars[i], table);
			}
		},
		generateRow: function(no, car, tableObject) {
			row = tableObject.insertRow((no+1));

			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
		
			cell1.innerHTML = no + '.';
			cell2.innerHTML = car.make;
			cell3.innerHTML = car.model;
			cell4.innerHTML = car.color;
		},
		addRow: function() {
			var carMake = document.getElementsByName("input-car-make")[0].value;
			var carModel = document.getElementsByName("input-car-model")[0].value;
			var carColor = document.getElementsByName("input-car-color")[0].value;

			var newRowData = {"make": carMake, "model": carModel, "color": carColor};
			defaultData.cars.push(newRowData);

			this.clearEntry();
			this.start();
		},
		deleteRow: function() {
			var table = document.getElementById('table-form');

			while (table.rows.length > 4) {
				table.deleteRow(2);
			}
		},
		clearEntry: function() {
			var inputRow = document.getElementsByClassName("input-add-entry");
			console.log(inputRow[0].value);
			for (var i=0; i<inputRow.length; i++) {
				inputRow[i].value = '';
			}
		}
	}
});


// run program
var x = new tehee();
x.start();