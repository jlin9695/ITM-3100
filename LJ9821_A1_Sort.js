var varA;
var varB;
var varC;
var varResults;

	function fn_Ascending()
	{
		varA = parseInt(document.getElementById("txt_ValueA").value);
		varB = parseInt(document.getElementById("txt_ValueB").value);
		varC = parseInt(document.getElementById("txt_ValueC").value);
		
		var ArrayAscending = [varA, varB, varC]
		ArrayAscending.sort(function(a, b){return a - b});
		document.getElementById("p_Results").innerHTML = "The Ascending Order of the Array is " + ArrayAscending;
	}
	
	function fn_Descending()
	{
		varA = parseInt(document.getElementById("txt_ValueA").value);
		varB = parseInt(document.getElementById("txt_ValueB").value);
		varC = parseInt(document.getElementById("txt_ValueC").value);
		
		var ArrayDescending = [varA, varB, varC]
		ArrayDescending.sort(function(a, b){return b - a});
		document.getElementById("p_Results").innerHTML = "The Descending Order of the Array is " + ArrayDescending;
	}