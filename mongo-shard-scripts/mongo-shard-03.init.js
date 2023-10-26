rs.initiate({
  _id: "mongo-shard-03", // string: <replSet>
  version: 1,
  members: [
    { _id: 0, host: "shard-03a:27020" }, // string: <docker-service>:<port>
  ],
});
