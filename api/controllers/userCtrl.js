var User = require('../models/userModel.js');
var bcrypt = require('bcryptjs');

function crypter (pass) {
  bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(pass, salt, function (err, hash) {
      console.log(hash);
    })
  })
  return userHash;
}

module.exports = {
    //save or find user

    login: function (req, res) {
        if (req.session.user) {
            delete req.session.user;
        }
        var email = req.body.email;
        var pass = crypter(req.body.pass);
        User.findOne({ email: email })
            .exec(function (err, user) {
                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                } else {
                    if (user.pass === pass) {
                      req.session.user = user;
                      console.log('user', req.session.user);
                      return res.status(200).json(user);
                    } else {
                      console.log('incorrect password', req.body);
                      return res.status(401).json('Incorrect Password');
                    }

                }
            })
    },
    logout: function (req, res) {
        if (req.session.user) {
            delete req.session.user;
        }
        console.log('user', req.session.user);
        return res.status(200).send('logged out')
    },

    newUser: function (req, res, next) {
      var newUser = {};
      newUser.username = req.body.username;
      newUser.email = req.body.email;
      newUser.pass = crypter(req.body.pass);
      console.log(newUser)

      if (newUser) {
        User.create(newUser, function(err, response) {
          res.status(200).json(response);
        })
      }

    }




    //save list (and list ref to user)


}
