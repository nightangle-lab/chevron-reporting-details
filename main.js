{ 
  dev = "Coded by Mizanurrahman" ;
  status = "Connected" ;
  console.log(status);
  console.log(dev);
}
 function performSearch() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("data-table");
        tr = table.getElementsByTagName("tr");

        for (i = 1; i < tr.length; i++) { // Start from 1 to skip the header row
            tds = tr[i].getElementsByTagName("td");
            for (var j = 0; j < tds.length; j++) {
                td = tds[j];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break; // Show the row and move to the next row
                    } else {
                        tr[i].style.display = "none"; // Hide the row if no match
                    }
                }
            }
        }
    }
