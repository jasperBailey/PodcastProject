use podcast_project;

db.dropDatabase();

db.favPods.insertMany([
    {
        uuid: "cb8d858a-3ef4-4645-8942-67e55c0927f2"
    },
    {
        uuid: "d682a935-ad2d-46ee-a0ac-139198b83bcc"
    }
]
)