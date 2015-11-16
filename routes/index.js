
/*
 * GET home page.
 */

exports.index = function(req, res){
  if(req.query.token!=='pivotal'){
    res.send("Please provide token to access!");
    return;
  }
  res.render('index', { title: 'Todo App|Express + MongoDB' });
};