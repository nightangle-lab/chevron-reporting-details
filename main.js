{ 
  dev = "Coded by Mizanurrahman" ;
  status = "Connected" ;
  console.log(status);
  console.log(dev);
}
   // Replace 'your-file.csv' with the path to your CSV file
    Papa.parse('data.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: function (results) {
        displayData(results.data);
      }
    });

    function displayData(data) {
      var table = document.getElementById('csvData');
      var headers = Object.keys(data[0]);

      // Create header row
      var headerRow = table.insertRow(0);
      headers.forEach(function (header) {
        var th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });

      // Create data rows
      data.forEach(function (row) {
        var tr = table.insertRow();
        headers.forEach(function (header) {
          var td = tr.insertCell();
          td.textContent = row[header];
        });
      });
    }
document.addEventListener('DOMContentLoaded', function() {
    // Your script code goes here

    document.getElementById('searchButton').addEventListener('click', performSearch);

    function performSearch() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("csvData");
        tr = table.getElementsByTagName("tr");

        for (i = 1; i < tr.length; i++) { // Start from 1 to skip the header row
            tds = tr[i].getElementsByTagName("td");
            var rowVisible = false;
            for (var j = 0; j < tds.length; j++) {
                td = tds[j];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        rowVisible = true;
                        break; // Show the row and move to the next row
                    }
                }
            }
            tr[i].style.display = rowVisible ? "" : "none"; // Show or hide the row based on visibility
        }
    }
});

