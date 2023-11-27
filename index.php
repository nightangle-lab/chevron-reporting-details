<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSV to HTML</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
</head>
<body>

  <table id="csvData" border="1"></table>

  <script>
    // Replace 'your-file.csv' with the path to your CSV file
    Papa.parse('/data.csv', {
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
  </script>

</body>
</html>
