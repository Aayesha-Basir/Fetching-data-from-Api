const fetchData = () => {
  for (i = 0; i < 15; i++) {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((value) => {
        const user = value.results[0];
        const userInformation = extractuserinfo(user);
        const usercontainer = documnet.createElement("div");
        usercontainer.className = "usercard";
        usercontainer.innerHTML = userInformation;
        document.getElementById("container").appendChild(usercontainer);
      })
      .catch((error) => {
        console.log("error found:", error);
        (document.getElementById("error").innerHTML = "Error found"), error;
      });
  }
};
function extractuserinfo(user) {
  const image = user.picture.large;
  const name = user.name;
  const gender = user.gender;
  const id = user.id;
  const dob = user.dob;
  const email = user.email;
  const phone = user.phone;
  const address = user.location;

  return `
    <div>
        <img id="image" src="${image}"></img>
        <p>Name: ${name.first} ${name.last}</p>
        <p>Gender: ${gender}</p>
        <p>ID: ${id.value} ${id.name}</p>
        <p>DOB: ${dob.date} Age: ${dob.age}</p>
        <p>email: ${email}</p>
        <p>phoneno: ${phone}</p>
        <p>Address: ${address.city} ${address.state} ${address.country} ${address.street.name} ${address.street.number}</p>
    </div>`;
}

fetchData();
