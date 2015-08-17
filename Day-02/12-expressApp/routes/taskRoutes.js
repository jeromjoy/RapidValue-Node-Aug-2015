var express = require('express');
var router = express.Router();

var taskList = [
    {id : 1, name : "Watch a movie", isCompleted : false},
    {id : 2, name : "Explore Cochin", isCompleted : false},
    {id : 3, name : "Gobble food", isCompleted : false}
];


router.get('/', function(req, res, next) {
  res.render('tasks/index', {list : taskList});
});

router.get('/new', function(req, res, next) {
  res.render('tasks/new');
});

router.post('/new', function(req, res, next) {
  var newTaskId = taskList.reduce(function(result, task){
      return result > task.id ? result : task.id;
  },0) + 1;

    var newTask = {
        id : newTaskId,
        name : req.body.newTask,
        isCompleted : false
    };
    taskList.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    var id = parseInt(req.params.id);
    var task = taskList.filter(function(t){
        return t.id === id;
    })[0];
    if (task){
        task.isCompleted = !task.isCompleted;
    }
    res.redirect('/tasks');
});



module.exports = router;
