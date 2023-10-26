admin = db.getSiblingDB("admin");
admin.createUser({
  user: "admin",
  pwd: "admin",
  roles: [
    {
      role: "userAdminAnyDatabase",
      db: "admin",
    },
  ],
});

admin.auth("admin", "admin");
// readWrite user
admin.createUser({
  user: "coreUser",
  pwd: "example",
  roles: [
    { role: "readWrite", db: "core-cdp-dev" },
  ],
});
// readWrite user
admin.createUser({
  user: "locationUser",
  pwd: "example",
  roles: [
    { role: "readWriteAnyDatabase", db: "admin" },
  ],
});
