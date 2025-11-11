const froyo = () => {};

const userInput= prompt("please enter a list of your favorite froyo flavors");
//console.log(userInput);

const flavors= userInput.split(" ,");
//console.log(flavors);

const scoopCount= {};

for(let scoop of flavors){
  
  if(scoopCount[scoop]){
    scoopCount[scoop] = scoopCount[scoop] + 1;
  } else{
    scoopCount[scoop]= 1;
    console.log("current scoopCount" , scoopCount);
  }
}



