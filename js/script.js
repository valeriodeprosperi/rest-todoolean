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






});
