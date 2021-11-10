const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please enter the name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

 const pineapple = new Fruit ({
  name: "pineapple",
  rating: 7,
  review: "Good fruit"
});

//pineapple.save();

/*const banana = new Fruit({
  name:"banana",
  rating: 8,
  review: "Good"
});
const orange = new Fruit({
  name:"orange",
  rating: 9,
  review: "Good"
});
const grapes = new Fruit({
  name:"grapes",
  rating: 9,
  review: "Good"
}); */

// Fruit.insertMany([banana, orange, grapes], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully saved");
//   }
// });

/*Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    console.log(fruits);
  fruits.forEach(function(fruit){
    console.log(fruit.name);
  });
}
}); */


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

/*const person = new Person({
  name: "Sumita",
  age: 25,
  favouriteFruit: pineapple
});

person.save(); */


/*Fruit.updateOne({id:"6158971ec56198ee5b8e517a"}, {name: "mango"}, function(err){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    console.log("Successfully Updated the data");
  }
}); */


/*Fruit.deleteOne({name:"mango"}, function(err){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    console.log("Successfully deleted");
  }
}); */

/*Person.deleteMany({name: "Sagar"}, function(err){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    console.log("Successfully deleted all documents");
  }
}) */
Person.updateOne({name: "Sagar"}, {favouriteFruit: pineapple}, function(err){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    console.log("Successfully Updated the data");
  }
});
