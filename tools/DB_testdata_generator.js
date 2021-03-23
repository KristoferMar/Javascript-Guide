var fs = require("fs");

// fs.truncate('DPtestdata.sql', 0, function(){console.log('truncated file')})

console.log("WRITING TO FILE");
for (let value = 1; value <= 10000; value++) {
    // console.log(`INSERT  INTO dpreplica.dp_replica_002 (Modtager, Modtagertype, Indholdstype, Tilmeldt, SystemType)VALUES('SLETTET ${value}', 'P', 'S', 1, 'NEMSMS');`)
    fs.appendFileSync('DPtestdata.sql', `INSERT  INTO dpreplica.dp_replica_002 (Modtager, Modtagertype, Indholdstype, Tilmeldt, SystemType)VALUES('SLETTET ${value}', 'P', 'S', 1, 'NEMSMS');`, function(err) {
        if (err) return console.error(err);
    });
}