let express = require('express');
let app = express();

app.use(express.json())

app.use('/test', function(req, res){
    res.send('Test Endpoint Success');
})

app.get('/home', (req, res) =>{
    // this will send back a file in the current directory (__dirname),
    // followed by the path to the file we want to send 
    console.log(__dirname);
    res.sendFile(__dirname + '/static.html')
})

app.listen(8000, function (){
    console.log('app is listening');

})


