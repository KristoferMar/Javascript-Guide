var fs = require("fs");

// fs.truncate('DPtestdata.sql', 0, function(){console.log('truncated file')})

console.log("WRITING TO FILE");
for (let value = 1234000000; value <= 1235000000; value++) {

    fs.appendFileSync('DPtestdata.sql', `EBOKS002006S              P                   ${value}                                            J\n`, function(err) {
        if (err) return console.error(err);
    });
}