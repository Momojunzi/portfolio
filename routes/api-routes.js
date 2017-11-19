var db = require('../models');

module.exports = function(app){
   app.get('/api/work', function(req, res){
     db.Work.findAll({}).then(function(data){
        console.log(data);
       res.json(data);
     });
   });
};
