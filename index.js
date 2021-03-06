function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document
  .getElementById("app")
  .querySelectorAll("ul.ranked-list li");
 
for (let i = 0; i < lis.length; i++) {
  let value = lis[i].innerHTML; 
  lis[i].innerHTML = parseInt(value) + n;
  }
}

function deepestChild(){
  
  let node = document.querySelector('#grand-node');
  let current = node.getElementsByTagName('div');
  let next=[];
  
  
  while (current.firstElementChild !== null) {

  for (let i = 0; i < current.length; i++){
    next.push(current[i])
    }
  
   current = next.shift();
  }
 
 return current; 
}