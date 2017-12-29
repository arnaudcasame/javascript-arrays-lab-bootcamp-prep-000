const app = "I don't do much.";
let kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(arr, item){
  arr.push(item);
  return arr;
}

function appendKitten(arr, item){
  return [...kittens, item];
}