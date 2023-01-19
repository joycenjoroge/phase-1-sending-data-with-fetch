// Add your code here
let name = "Steve"
let email = "steve@steve.com"
// let name = "Jim"
// let email = "jim@jim.com"


const body = document.querySelector("body");
let message ="Unauthorized Access"



function submitData(nm, emailAddress) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name:nm,
      email:emailAddress,
    }),
  })
    .then(res => res.json())
    .then(user => document.body.innerHTML = user.id)
    //.then(x=>console.log(x.id))
    //.then((user) => (document.body.innerHTML = user.id))
    .catch(function (error) {
      // console.log(error.message)
      document.body.innerHTML = error.message;
    
})
}

submitData("Steve","steve@steve.com")

