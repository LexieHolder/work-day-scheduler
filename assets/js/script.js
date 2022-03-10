//get status colors to load immediately after opening
window.onload = function() {
    timeColor();
}

//bring date and time to header
var time = new Date().getHours();
var date = document.querySelector("#currentDay");
var currentDay = moment().format("dddd LLL");
date.append(currentDay);

//color coding timeblocks for past, present, future
function timeColor() {
    //colors for nineOclock
    if (time > 10) {
        $("#nine-block").addClass("past");
    } else if (time >= 9 && time < 10) {
        $("#nine-block").addClass("present");
    } else if (time < 9) {
        $("#nine-block").addClass("future");
    } 
    //colors for tenOclock
    if (time > 11) {
        $("#ten-block").addClass("past");
    } else if (time >= 10 && time < 11) {
        $("#ten-block").addClass("present");
    } else if (time < 10) {
        $("#ten-block").addClass("future");
    } 
    //colors for elevenOclock
    if (time > 12) {
        $("#eleven-block").addClass("past");
    } else if (time >= 11 && time < 12) {
        $("#eleven-block").addClass("present");
    } else if (time < 11) {
        $("#eleven-block").addClass("future");
    } 
    //colors from twelveOclock
    if (time > 13) {
        $("#twelve-block").addClass("past");
    } else if (time >= 12 && time < 13) {
        $("#twelve-block").addClass("present");
    } else if (time < 12) {
        $("#twelve-block").addClass("future");
    } 
    //colors for oneOclock
    if (time > 14) {
        $("#one-block").addClass("past");
    } else if (time >= 13 && time < 14) {
        $("#one-block").addClass("present");
    } else if (time < 13) {
        $("#one-block").addClass("future");
    } 
    //colors for twoOclock
    if (time > 15) {
        $("#two-block").addClass("past");
    } else if (time >= 14 && time < 15) {
        $("#two-block").addClass("present");
    } else if (time < 14) {
        $("#two-block").addClass("future");
    } 
    //colors for threeOclock
    if (time > 16) {
        $("#three-block").addClass("past");
    } else if (time >= 15 && time < 16) {
        $("#three-block").addClass("present");
    } else if (time < 15) {
        $("#three-block").addClass("future");
    } 
    //colors for fourOclock
    if (time > 17) {
        $("#four-block").addClass("past");
    } else if (time >= 16 && time < 17) {
        $("#four-block").addClass("present");
    } else if (time < 16) {
        $("#four-block").addClass("future");
    } 
};

//save events
//nine-block save
$("#nine-block .btn-save").click(function() {
    // get form values
    var taskText = $("#nine-block").val();
    var taskTime = $("#nine-block").val();
    
  })
  //ten-block save
$("#ten-block .btn-save").click(function() {
    // get form values
    var taskText = $("#ten-block").val();
    var taskTime = $("#ten-block").val();
    tasks.toDo.push({
        text: taskText,
        date: taskTime
      });
  
      saveTasks();
  })
  //eleven-block save
$("#eleven-block .btn-save").click(function() {
    // get form values
    var taskText = $("#eleven-block").val();
    var taskTime = $("#eleven-block").val();
    tasks.toDo.push({
        text: taskText,
        date: taskTime
      });
  
      saveTasks();
  })
  //twelve-block save
$("#twelve-block .btn-save").click(function() {
    // get form values
    var taskText = $("#twelve-block").val();
    var taskTime = $("#twelve-block").val();
    tasks.toDo.push({
        text: taskText,
        date: taskTime
      });
  
      saveTasks();
  })
  //one-block save
$("#one-block .btn-save").click(function() {
    // get form values
    var taskText = $("#one-block").val();
    var taskTime = $("#one-block").val();
    tasks.toDo.push({
        text: taskText,
        date: taskTime
      });
  
      saveTasks();
  })
  //two-block save
$("#two-block .btn-save").click(function() {
    // get form values
    var taskText = $("#two-block").val();
    var taskTime = $("#two-block").val();
    tasks.toDo.push({
        text: taskText,
        date: taskTime
      });
  
      saveTasks();
  })
  //three-block save
$("#three-block .btn-save").click(function() {
    // get form values
    var taskText = $("#three-block").val();
    var taskTime = $("#three-block").val();
    tasks.toDo.push({
        text: taskText,
        date: taskTime
      });
  
      saveTasks();
  })
  //four-block save
$("#four-block .btn-save").click(function() {
    // get form values
    var taskText = $("#four-block").val();
    var taskTime = $("#four-block").val();
    tasks.toDo.push({
        text: taskText,
        date: taskTime
      });
  
      saveTasks();
  });