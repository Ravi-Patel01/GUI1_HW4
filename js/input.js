//Ravi Patel ravi_patel1@student.uml.edu
$(document).ready(function() {
    $("#x_y_input").validate({
      rules: {
        x_s: {
            required: true,
            number: true,
            min: -50,
            max: 50,
        },
        x_e: {
            required: true,
            number: true,
            min: -50,
            max: 50,
        },
        y_s: {
            required: true,
            number: true,
            min: -50,
            max: 50,
        },
        y_e: {
            required: true,
            number: true,
            min: -50,
            max: 50,
        }
      }
    });
});

function draw_table() {
    var table = document.createElement('table'); //create table

    table.setAttribute('id', 'info'); //set table id for traversal and extraction

    var arrHead = new Array();
    var x_y_input = document.getElementById("x_y_input"); //retrieve vals and place in vars
    var x_start = document.getElementById("x_start");
    var x_end = document.getElementById("x_end")
    var y_start = document.getElementById("y_start")
    var y_end = document.getElementById("y_end")

    //check if number
    if(isNaN(x_start.value) || isNaN(x_end.value) || isNaN(y_start.value) || isNaN(y_end.value)) {
        return
    }
    //check if start is greater than end
    if(x_start.value > x_end.value || y_start.value > y_end.value){
        return
    }
    //check if out of acceptable tange of vals (-50 to 50)
    if(x_start.value < -50 || x_end.value > 50 || y_start.value < -50 || y_end.value > 50)  {
        return
    }

    //creates table header with x start and end vals
    arrHead = [''];
    var j = 0;
    for(var i = x_start.value; i <= x_end.value; i++) {
        var temp = parseInt(x_start.value) + j;
        arrHead.push(temp);
        j++;
    }

    var arrValue = new Array();
    var tempArray = new Array();
    
    //fill each row and push onto larger list of rows
    for(var i = y_start.value; i <= y_end.value; i++){
        tempArray.push(i);
        for(var j = x_start.value; j <= x_end.value; j++) {
            tempArray.push(i * j);
        }
        arrValue.push(tempArray)
        tempArray = [];
    }

    var tr = table.insertRow(-1);
    //input header
    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
    //input rows
    for (var c = 0; c <= arrValue.length - 1; c++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < arrHead.length; j++) {
            var td = document.createElement('td');
            td = tr.insertCell(-1);
            td.innerHTML = arrValue[c][j];
        }
    }

    //replace placeholder table with created table
    document.getElementById("info").replaceWith(table);

}