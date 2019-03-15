var express = require('express');
var app = express();

var mongoose = require('mongoose');
var user = 'KHOALUAN2019';
var pass = 'khoaluan2019';
var url = 'mongodb://' + user + ':' + pass + '@mongodb-1051-0.cloudclusters.net/KHOALUAN2019?authSource=admin';

var bodyParser = require('body-parser');
app.use(bodyParser.json());
mongoose.connect(url, { useNewUrlParser: true });
var User = mongoose.model('User', { name: String, roles: Number, age: Number });
app.get('/get-user', function (req, res) {

    User.find({}, function (err, users) {
        var userMap = {};

        users.forEach(function (user) {
            userMap[user._id] = user;
        });

        res.send(userMap);
    });
})
app.post('/add-user', function (req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var role = req.body.roles;
    var user1 = new User({ name: name, age: age, roles: role });
    console.log(user1);
    // user1.save(function (err, userObj) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log('saved successfully:', userObj);
    //     }
    // });
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
