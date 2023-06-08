let m = parseInt(prompt("Enter a Value"));
let p= parseInt(prompt("Enter a Value"));
let c= parseInt(prompt("Enter a Value"));
let x=m+p+c
let y=m+p
if(x>=190){
    console.log("Total marks of Maths, Physics and Chemistry :"+x)
    console.log("The candidate is  eligible for admission.")
}
else if(y>=140){
    console.log("Total marks of Maths and Physics : "+y)
    console.log("The candidate is  eligible for admission.")
}
else{
    console.log("Total marks of Maths, Physics and Chemistry :"+x)
    console.log("Total marks of Maths and Physics : "+y)
    console.log("The candidate is not eligible for admission.")
}