const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
//const fileUpload = require('express-fileupload');
//middlewares
app.use(cors());
app.use(express.json());
//app.use(fileUpload());
// const {protect} = require("./Middleware/AuthMiddleware");
// //import routes 
// const postroutes = require('./routes/posts');
// app.use('/post',postroutes);

// const reserveroutes = require('./routes/restaurentDash');
// app.use('/reserve',reserveroutes);

// const reserving = require('./routes/reserveAPI');
// app.use('/offer', reserving);

// const userRoutes = require('./routes/userRoutes');
// app.use("/api/users", userRoutes);


// app.use('/posts',()=>{
    
//     console.log('example of middleware');
// });
//you have the ability to create routes

//authentication module
const authRoutes = require('./routes/auth');
app.use('/auth',authRoutes);

//the blog posting module
const blogPostingRoutes = require('./routes/blogs');
app.use('/blog',blogPostingRoutes);

//the user valued functions
const userFunc = require('./routes/userFunctions');
app.use('/user',userFunc);

//rating of an user
const ratingFunc = require('./routes/ratingFunc');
app.use('/rating',ratingFunc);

//searchings
const searchFunc = require('./routes/search');
app.use('/search',searchFunc);

//moderators functions
const moderatorFunc = require('./routes/moderators');
app.use('/moderator',moderatorFunc);

//connect to the db 
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true},
()=>{
    console.log('connected to db');
});
//how do we start listening to the server
app.listen(5001);
console.log('listening on port 5001');
module.exports=app;