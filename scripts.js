
document.getElementById('calculeaza').onclick = function() {
	
	calculator();
	
};

function calculator() {
	
	var x_val = document.getElementById('x').value.trim();
	var y_val = document.getElementById('y').value.trim();
	var operatie_val = document.getElementById('operatie').value;
	
	if (x_val.length == 0 || y_val.length == 0 || isNaN(x_val) || isNaN(y_val)) {
		
		alert('Valorile introduse trebuie sa fie de tip numeric !');
		
	} else {
		
		if (operatie_val == 'adunare') {
			
			var rezultat = Number(x_val) + Number(y_val);
			var operatie_str = ' + ';	
			
		} else if (operatie_val == 'scadere') {
			
			var rezultat = Number(x_val) - Number(y_val);
			var operatie_str = ' - ';
			
		}
		
		var output = x_val + operatie_str + y_val + ' = ' + rezultat + '<br />';
		
		document.getElementById('rezultate').innerHTML += output;
		
	}
	
}



