var request=new XMLHttpRequest();
var content='';
request.open('Get','https://jsonplaceholder.typicode.com/posts');
request.send();
request.onload=function(){

var data = JSON.parse(this.response);
html_start ="<table>  <tr><th>id</th><th>userId</th><th>title</th><th> body</th></tr>";
   for(let i=0;i<data.length;i++){
    //   console.log('id',data[i].id);
    //   console.log('userId',data[i].userId);
    //   console.log('title',data[i].title);
    //   console.log('body',data[i].body);
    content += "<tr><td>"+data[i].id +"</td> <td>"+data[i].userId+"</td> <td>"+ data[i].title+"</td> <td>"+data[i].body+"</td></tr>";
  } 
  html_end = "</table>";
  html = html_start + content +html_end; 
//   alert(html)
  document.getElementById('postdata').innerHTML = html;


}