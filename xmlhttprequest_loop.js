var request=new XMLHttpRequest();
request.open('Get','https://jsonplaceholder.typicode.com/posts');
request.send();
request.onload=function(){

var data = JSON.parse(this.response);

   for(let i=0;i<data.length;i++){
      console.log('id',data[i].id);
      console.log('userId',data[i].userId);
      console.log('title',data[i].title);
      console.log('body',data[i].body);
  } 
}