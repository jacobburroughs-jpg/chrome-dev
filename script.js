const button = document.querySelector("#load-user");

button.addEventListener("click", function() {

    let user = createUser();
    
    console.log(user);

});

function createUser() {

    let name = prompt("What is Your Name?");
    let role = prompt("What is Your Role?");

    return{
        name: name,
        role: role
    }
}
