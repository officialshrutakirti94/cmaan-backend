import express from "express";
import mongoose from 'mongoose';
import route from './routes/userRoute.js';
import bodyParser from "body-parser";
const connection_string='mongodb+srv://techsavy689:OelIJaVmxBHucOwo@cluster0.ln2gb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express();
const port = 3000; 


app.use(bodyParser.json())

mongoose.connect(connection_string,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("Connected to Database")
}).catch(err=>{
  console.log("this is the error:",err)
})

app.use("/api/route",route )


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
