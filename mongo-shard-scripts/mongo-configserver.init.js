rs.initiate({
  _id: "mongo-configserver", // string: <replSet>
  configsvr: true,
  version: 1,
  members: [
    { _id: 0, host: "configserver-01:27017" }, // string: <docker-service>:<port>
  ],
});
