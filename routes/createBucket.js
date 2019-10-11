const AWS = require("aws-sdk");
const dotenv = require("dotenv");

// Enter copied or downloaded access ID and secret key here
const ID = process.env.AMAZON_ID;
const SECRET = process.env.AMAZON_PASS;

// The name of the bucket that you have created
const BUCKET_NAME = process.env.BUCKET;
console.log(BUCKET_NAME)

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    // Set your region here
    LocationConstraint: "us-east-2"
  }
};

s3.createBucket(params, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log("Bucket Created Successfully", data.Location);
  }
});
