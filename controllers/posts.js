const Post = require("../models/post")

const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid'); // import uuid to generate random ID's

const s3 = new S3(); // initialize s3 constructor



module.exports = {
    create
}

function create(req, res) {
  console.log(req.body, req.file, req.user);

  //Upload the file to AWS
  const filePath = `${uuidv4()}/${req.file.originalname}`;
  const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer };
  // exactly like signup we did yesterday, so look at the signup function
  s3.upload(params, async function (err, data) {
    console.log(err, " < - error from aws in the post create");

    try {
      const post = await Post.create({
        name: req.body.name,
        photoUrl: data.Location,
        user: req.user._id
      });

      res.status(201).json({ post: post });
    } catch (err) {
      res.status(400).json({ err });
    }
  });
}