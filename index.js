// Import express
let express = require('express');
// Initialize the app
let app = express();

app.use(express.urlencoded({extended: true}));
let routes = require('./routes.js');
app.use(express.static('public'));
let session = require('express-session');



app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized : false
  }));


// Send message for default URL
app.use('/', routes);
//app.get('/', (request, response) => response.send('Hello World !'));
// Setup server port
let port = 8000;
// Launch app to listen to specified port
app.listen(port, function () {
    console.log('Server running on port ' + port);
});
