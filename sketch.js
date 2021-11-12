var marks = [35,38,42,45,43,34,46,41,48,32];


function setup() 
{
  createCanvas(400,400);
  findmarks(48)
}

function draw() 
{
  background(30);
}

 function findmarks(n)
 {
  for (let i = 0; i < marks.length; i++) {
    if(marks[i]==n){
    console.log(n+" Is found at "+i)
    }
  }
    
  

 }

