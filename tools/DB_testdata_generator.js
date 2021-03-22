for (let value = 1; value < 100; value++) {
    console.log(`INSERT  INTO dpreplica.dp_replica_002 (Modtager, Modtagertype, Indholdstype, Tilmeldt, SystemType)VALUES('SLETTET ${value}', 'P', 'S', 1, 'NEMSMS');`)
}

