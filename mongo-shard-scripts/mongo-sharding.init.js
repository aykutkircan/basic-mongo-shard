// mongo-shard-01 string: "<replSet>/<docker-service>:<port>"
sh.addShard("mongo-shard-01/shard-01a:27018");

// mongo-shard-02 string: "<replSet>/<docker-service>:<port>"
sh.addShard("mongo-shard-02/shard-02a:27019");

// mongo-shard-03 string: "<replSet>/<docker-service>:<port>"
sh.addShard("mongo-shard-03/shard-03a:27020");
