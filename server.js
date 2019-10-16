const express=require('express');
const app=express();
const mongoose=require('mongoose');
const db=require('./config/keys').mongoUrl;
const bodyParser=require('body-parser');
const users=require('./routes/api/users');
const image=require('./routes/api/storeimage');
const passport=require('passport');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(db,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users',users);
app.use('/api/image',image);

if (process.env.NODE_ENV === 'production') {
  
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  const port=process.env.PORT||5000;
  
  app.listen(port,()=>{
      console.log(`server connected at ${port}`);
  });