
// Local machine
// var baseURL = "http://localhost:80/";
// Production machine
var baseURL = "http://www.cellcorpusouhk.com/";

var corpus = {
    getConcordance : function() {
            // retrieve the search query
            var search_word = document.getElementById('search_word').value;
            $.ajax({
                method  : "GET",
                url     : baseURL + "viewConcordance/",
                data    : { param : search_word },
                success :  corpus.displayConcordanceData
            });
    },
    displayConcordanceData : function(data) {
            $("#tbody").empty();
            var tbody = document.getElementById('tbody');
            for (var i = 0; i < data.length; i++) {
                var tr = "<tr>";
                tr += "<td>" + data[i][4] + " <strong>" + data[i][1] + "</strong> " + data[i][5] + "</td></tr>";
                tbody.innerHTML += tr;
            }
    },
    getFrequency : function() {
            $.ajax({
                method  : "GET",
                url     :baseURL + "viewFrequency/",
                success :  corpus.displayFrequencyData
            });
    },
    displayFrequencyData : function(data) {
            $("#tbody").empty();
            var tbody = document.getElementById('tbody');
            var tt = "<thead> <tr> <th>Word</th> <th>Frequency</th> </tr> </thead>"
            for (var i = 0; i < data.length; i++) {
                var tr = "<tr>";
                tr += "<td>" + data[i][0] + "</td> <td><strong>" + data[i][1] + "</strong></td></tr>";
                tbody.innerHTML += tr;
            }
    }
}

