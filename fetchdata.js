
function fetchData() 
{
    for (i = 0; i < 12; i++) {
        fetch("https://randomuser.me/api")
            .then(function (response) {
                return response.json();
            })
            .then(function (value) {
                const user = value.results[0];//fetch data from API
                const userInfo = extractuserinfo(user);// call function i.e extractuserinfo with parameter user
                const usercontainer = document.createElement("div");// create a div and store in usercontainer variable
                usercontainer.className = "usercard"; //creted a classname called usercard to style it using css
                usercontainer.innerHTML= userInfo;//display data in html page
                document.getElementById("container").appendChild(usercontainer);//displaying data in container
            })
            .catch(function (error) {
                console.log("Error found:", error)
                document.getElementById("error").innerHTML= "Error found"+" "+ error;
            });
    }
}

function extractuserinfo(user) {
    const image = user.picture.large;
    const name = user.name;
    const gender = user.gender;
    const id= user.id;
    const dob = user.dob;
    const email = user.email;
    const phone = user.phone;
    const address = user.location;

    return`
    <div>
        <img id="image" src="${image}"></img>
        <p>Name: ${name.first} ${name.last}</p>
        <p>Gender: ${gender}</p>
        <p>ID: ${id.value} ${id.name}</p>
        <p>DOB: ${dob.date} Age: ${dob.age}</p>
        <p>email: ${email}</p>
        <p>phoneno: ${phone}</p>
        <p>Address: ${address.city} ${address.state} ${address.country} ${address.street.name} ${address.street.number}</p>
    </div>`
    ;
}

fetchData();