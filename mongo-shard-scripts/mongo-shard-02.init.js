rs.initiate({
  _id: "mongo-shard-02", // string: <replSet>
  version: 1,
  members: [
    { _id: 0, host: "shard-02a:27019" }, // string: <docker-service>:<port>
  ],
});
