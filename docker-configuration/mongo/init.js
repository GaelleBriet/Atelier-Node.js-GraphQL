db.createUser({
  user: "student",
  pwd: "secret",
  roles: [{ role: "readWrite", db: "velo-thentication" }],
});

db.users.insertMany([
  {
    name: "admin",
    email: "admin@velo-cation.com",
    password: "$2a$10$TEdN/s.rvZLBcVRoiEQXfe06gplG1SQUdgI15zWk2bBSex0vEaWVm",
    role: "administrateur",
    _id: "63315fe65c23f01de5ebf083",
    created_at: "2023-09-26T08:16:38.277Z",
    updated_at: "2023-09-26T08:16:38.277Z",
    __v: 0,
  },
  {
    name: "gestionnaire",
    email: "gestionnaire@velo-cation.com",
    password: "$2a$10$TEdN/s.rvZLBcVRoiEQXfe06gplG1SQUdgI15zWk2bBSex0vEaWVm",
    role: "gestionnaire",
    _id: "63315fe65c23f01de5ebf084",
    created_at: "2023-09-26T08:16:38.277Z",
    updated_at: "2023-09-26T08:16:38.277Z",
    __v: 0,
  },
  {
    name: "client",
    email: "client@mail.com",
    password: "$2a$10$TEdN/s.rvZLBcVRoiEQXfe06gplG1SQUdgI15zWk2bBSex0vEaWVm",
    role: "client",
    _id: "63315fe65c23f01de5ebf085",
    created_at: "2023-09-26T08:16:38.277Z",
    updated_at: "2023-09-26T08:16:38.277Z",
    __v: 0,
  },
]);
