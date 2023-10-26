rs.initiate({
  _id: "mongo-shard-01", // string: <replSet>
  version: 1,
  members: [
    { _id: 0, host: "shard-01a:27018" }, // string: <docker-service>:<port>
  ],
});
