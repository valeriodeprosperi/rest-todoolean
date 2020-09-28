// L'esercizio di oggi è quello di creare, come fatto in aula, una todo list sulla quale sarà possibile svolgere le operazioni di CRUD, usando qusta Api: http://157.230.17.132:XXXX/todos

$(document).ready(function() {


  // read

$.ajax(
{
  "url": "http://157.230.17.132:3019/todos",
  "method": "GET",
  "success": function(data) {
    render(data);
  },
  "error": function() {
    alert("error");
  }


});

// delete

$("#list").on("click", ".delete", function(){

var elm = $(this).parent();
var id = elm.attr("id");

$.ajax(
  {
    "url": "http://157.230.17.132:3019/todos",
    "method": "DELETE",
    "success": function(data){
      elm.remove();
    },
    "error": function() {
      alert("error");
    }

  }
);
});
});


// create
$(".add-todo").click(function(){

var val = $("#input-add-element").val();

if(val != ""){

  $.ajax( {
    "url": "http://157.230.17.132:3019/todos",
    "method": "POST",
    "data": {
      "text": val
    },
    "success": function(data){
      addElement(data);
    },
    "error":function(){
      alert("error");
    }
  });
}

});

function render(data){
  var source = $("#elm-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < data.length; i++) {
    var context = {
      "id" : data[i].id,
      "text" :data[i].text
    }
  }


  var html = template(context);

  $("#list").append(html);

}

function addElement(data){
  var source = $("#elm-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < data.length; i++) {
    var context = {
      "id" : data.id,
      "text" :data.text
    }
  }


  var html = template(context);

  $("#list").append(html);

}
