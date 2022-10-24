const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const axios =require('axios').default;




app.use(express.json());
app.get('/', (req,res)=>{
  res.status(200).json({
    message:"hshhs",
  })
})



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, file.originalname);
    }
 });
 var upload = multer({ storage: storage });

 /**
  * Create New Item
  *
  * @return response()
  */

 app.post('/api/image-upload', upload.single('image'),(req, res) => {
   const image = req.image;
    res.send(apiResponse({message: 'File uploaded successfully.', image}));
 });
 
 
 /**
  * API Response
  *
  * @return response()
  */
 function apiResponse(results){
     return JSON.stringify({"status": 200, "error": null, "response": results});
 }

app.listen(5000,() =>{
  console.log('Server started on port 5000...');
});