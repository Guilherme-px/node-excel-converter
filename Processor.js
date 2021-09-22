class Processor {

    static Process(data) {
        var tr = data.split("\r\n")
        var rows = []

        tr.forEach(row => {
            var arr = row.split(",")
            rows.push(arr)
        });

        return rows
    }

}

module.exports = Processor