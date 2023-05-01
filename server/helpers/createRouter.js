const express = require("express");
const { ObjectId } = require("mongodb");

const handleError = (res) => {
  return (err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  };
};

const createRouter = function (collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch(handleError(res));
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: new ObjectId(id) })
      .then((doc) => res.json(doc))
      .catch(handleError(res));
  });

  router.post("/", (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then((result) => {
        res.json({ _id: result.insertedId });
      })
      .catch(handleError(res));
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log("id: ", id);
    collection
      .deleteOne({ _id: new ObjectId(id) })
      .then((result) => res.json(result))
      .catch(handleError(res));
  });

  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    delete body._id;

    collection
      .updateOne({ _id: new ObjectId(id) }, { $set: body })
      .then((result) => res.json(result))
      .catch(handleError(res));
  });

  return router;
};

module.exports = createRouter;
