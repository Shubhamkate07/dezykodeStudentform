require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const MONGO_URI=process.env.MONGO_URI;
console.log(MONGO_URI);

const app=express();

app.use(cors());

app.use(express.json());

//MONGO_URI=mongodb+srv://shubhamkate962:DJMTsmlryjbdmdvZ@student-form1.9ksit.mongodb.net/student-form1?retryWrites=true&w=majority



const mono=mongoose.connect(process.env.MONGO_URI).then(()=>{
console.log('Connected to MongoDB');

}).catch(()=>{
    console.log("MongoDB not able to connect");
    
})

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  age: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  educationQualification: { type: String, required: true },

  yearOfCompletion:{type:String},
  interestedCourse: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  referredBy: { type: String },
  socialMedia: {
    linkedin: { type: Boolean, default: false },
    instagram: { type: Boolean, default: false },
    google: { type: Boolean, default: false },
    facebook: { type: Boolean, default: false }
  },
  friend: { type: String },
  servicetype:{type:String},
  PhoneNumber:{type:String}
});



const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true }
  });
  
  const User = mongoose.model('User', userSchema);
 const Employee = mongoose.model('Employee', employeeSchema);


//  app.post('/api/students', async (req, res) => {
//     try {
//       const student = req.body;
// await User.insertMany([student]);
//       res.status(201).json({ message: 'Student details saved successfully', data: savedStudent });
//     } catch (error) {
//       console.error('Error saving student details:', error);
//       res.status(500).json({ message: 'Error saving student details', error: error.message });
//     }
//   });

app.post('/api/students', async (req, res) => {
    try {
      const student = req.body;
      console.log(student);
      console.log(student.PhoneNumber);
      console.log(student.servicetype);
      
      
      
  

  
      const savedStudent = await User.insertMany([student]);
      res.status(201).json({ message: 'Student details saved successfully', data: savedStudent });
    } catch (error) {
      console.error('Error saving student details:', error);
      res.status(500).json({ message: 'Error saving student details', error: error.message });
    }
  });
  

app.listen(process.env.PORT,()=>{
    console.log("server running on port 5001");
})
