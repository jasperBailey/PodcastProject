use podcast_project;

db.dropDatabase();

db.favPods.insertMany([
    {
        uuid: "cb8d858a-3ef4-4645-8942-67e55c0927f2",
        subscribed: true
    },
    {
        uuid: "d682a935-ad2d-46ee-a0ac-139198b83bcc",
        subscribed: true
    },
    {
        uuid: "39d76990-f310-4972-9d48-c81820a65ff5",
        subscribed: true
    },

    {
        uuid: "7cd5506a-8427-4083-b916-8fd1a76ea9e3",
        subscribed: false
    },
    {
        uuid: "0f312465-7b11-4060-9048-eb8aa0a5e889",
        subscribed: false
    },
    {
        uuid: "2582dd58-3827-479a-b755-f1f29281d980",
        subscribed: false
    }
])