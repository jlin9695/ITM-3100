function fn_Assemble()
			{
				
				var strHTML;
				var frmDynForm
				var intValues;
				intValues = parseInt(document.getElementById("txt_Numbers").value);
				frmDynForm = document.getElementById("p_DynamicForm");
				
				strHTML = "<table border='2'><thead><tr><th>Position</th><th>Value</th></tr></thead>";
				strHTML += "<tbody>";
				
				for (var row= 1; row <= intValues; row++)
				{
					strHTML += "<tr><td>Row " + row + "</td>";
					strHTML += "<td><input type='text' class='txt_Values' size='5'></input></td></tr>";
				} //end for
				
				strHTML += "<tr><td colspan='2' align='center'>";
				strHTML += "<input type='button' name='btn_Process' onClick='fn_TriFunction()' value='Process'></input>";
				strHTML += "</td></tr>";
				
				strHTML += "</tbody>";
				strHTML += "</table>";
				
				frmDynForm.innerHTML = strHTML;
				
			}

function fn_TriFunction()
	{
		var indexpt;
		var Display = "";
		var MeanSum = 0, indexpt;
		var MeanVal;
		var MedianVal = 0;
		var ArrSuffer = document.getElementsByClassName("txt_Values"); 
		for (indexpt = 0; indexpt < ArrSuffer.length; indexpt += 1)
			{
				MeanSum += parseInt(ArrSuffer[indexpt].value);	
			}
			MeanVal = MeanSum/ArrSuffer.length;
			Display += "The Value of the mean is " + MeanVal + "<br>";
			
		var ArrAgony = [];
		var NewElements;
		for (indexpt = 0; indexpt < ArrSuffer.length; indexpt += 1)
		{
			NewElements = parseInt(ArrSuffer[indexpt].value);
			ArrAgony.push(NewElements);
		}
		ArrAgony.sort(function(a,b) {return a - b;});
		var ArrLength = parseInt(ArrAgony.length/2);
		if (ArrAgony.length % 2 != 0)
		{
			MedianVal = ArrAgony[ArrLength];
		}
		else
		{
			MedianVal = (ArrAgony[ArrLength] + ArrAgony[ArrLength - 1]) / 2;
		}
		
		Display += "The Value of the median is " + MedianVal + "<br>";
		
		var modeidx1 = 0;
		var modeidx2 = 0;
		var count1 = 0;
		var count2 = 1;
		var i = 0;
		
		for (indexpt = 0; indexpt < ArrAgony.length; indexpt++)
		{
			modeidx1 = ArrAgony[indexpt];
			count1 = 1;
		
			for (i = indexpt + 1; i < ArrAgony.length; i++)
			{
				if (modeidx1 == ArrAgony[i]) 
				{
				count1++;
				}
			}
			
			if (count1 > count2)
			{
				modeidx2 = modeidx1;
				count2 = count1;
			}
			
		}
		if (count2 != 1){
			Display += "The Value of the Mode is " + modeidx2;
		}
		else{
			Display += "The Mode does not exist for this array of numbers.";
		}
		
		document.getElementById("p_Display").innerHTML = Display;
	}