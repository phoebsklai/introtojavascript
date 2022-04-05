function food(meal){
  if(meal == "breakfast"){
    return("pancake");
  }
  else if(meal == "lunch"){
    return("tacos");
  }
  else if(meal == "dinner"){
    return("steak");
  }
  else{
    return "there are only 3 meals!";
  }
}
console.log(food("breakfast"));
console.log(food("lunch"));
console.log(food("dinner"));
