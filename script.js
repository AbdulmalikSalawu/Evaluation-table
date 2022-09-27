function multiply(){
    myTable.innerHTML = ''; 
    for (var i = 1; i<=myRow.value; i++){
        result = "<tr>"
    for (var j= 1; j<=myColumn.value; j++) {
        result += "<td>" + i + "*" + j + "=" + (i*j) + "</td>" 
        }
        result+= "</tr>"
        myTable.innerHTML += result
    }
}

function addition(){
    myTable.innerHTML = ''; 
    for (var i = 1; i<=myRow.value; i++){
        result = "<tr>"
    for (var j= 1; j<=myColumn.value; j++) {
        result += "<td>" + i + "+" + j + "=" + (i+j) + "</td>"
        }
    result += "</tr>"
    myTable.innerHTML += result;
    }
}

function subtraction(){
    myTable.innerHTML = ''; 
    for (var i = 1; i<=myRow.value; i++){
        result = "<tr>"
    for (var j= 1; j=myColumn.value; j++) {
        result += "<td>" + i + "-" + j + "=" + (i-j) + "</td>"
        }
    result += "</tr>"
    myTable.innerHTML += result;
    }
}

function division(){
    myTable.innerHTML = ''; 
    for (var i = 1; i<=myRow.value; i++){
        result = "<tr>"
    for (var j= 1; j<=myColumn.value; j++) {
        result += "<td>" + i + "/" + j + "=" + parseFloat(i/j).toFixed(2) + "</td>"
        }
        result += "</tr>"
        myTable.innerHTML += result
    }
}

