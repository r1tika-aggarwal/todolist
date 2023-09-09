$('#addButton').on('click', function () {
        // Generate the HTML structure using jQuery
        const newElement = $('<input type="checkbox" class="check" onclick="checkcheck()"> <label><input type="text" name="task"></label> <br>');
        $('#todos').append(newElement);
    });

function checkcheck() {
    var checkbox = document.getElementsByClassName('check');
    for (var i=0; i<checkbox.length;i++) {
      if (checkbox[i].checked === true)
      {
        console.log("a box is checked");
      }
    }
    
  }
  
    



