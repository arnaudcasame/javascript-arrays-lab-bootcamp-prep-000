const app = "I don't do much.";
let kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kitten){
  kittens.push(kitten);
  return kittens;
}

function appendKitten(arr, item){
  return [...kittens, item];
}