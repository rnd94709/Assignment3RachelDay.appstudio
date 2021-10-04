password = prompt("Enter your password:")
secondPassword = prompt("Re-enter your password:")

function passwordCompare(password, secondPassword){
  return password.localeCompare(secondPassword)
  }
  
let check = passwordCompare(password, secondPassword)

if (check == 0){
console.log("The passwords are the same.")
}
else {
  console.log("The passwords are not the same.")}
  
  