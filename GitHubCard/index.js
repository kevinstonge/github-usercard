const { default: axios } = require("axios");
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function newCard(username) {
  axios.get(`https://api.github.com/users/${username}`).then(r=>updateCards(r)).catch(err=>console.log(err));
}
newCard('kevinstonge');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
function updateCards(newCard) {
  document.querySelector('.cards').appendChild(buildCard(newCard.data));
}

function buildCard(data) {
  const card = document.createElement('div');
  card.classList.add("card");
  const img = document.createElement('img');
  img.src = data.avatar_url;
  card.appendChild(img);
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);
  const name = document.createElement('h3');
  name.innerText = data.name;
  name.classList.add('name');
  cardInfo.appendChild(name);
  const username = document.createElement('p');
  username.classList.add('username');
  username.innerText = data.login;
  cardInfo.appendChild(username);
  const location = document.createElement('p');
  location.innerText = `Location: ${data.location}`;
  cardInfo.appendChild(location);
  const profile = document.createElement('p');
  profile.innerText = "Profile: ";
  const profileLink = document.createElement('a');
  profileLink.href=data.html_url;
  profileLink.innerText=data.html_url;
  profile.appendChild(profileLink);
  cardInfo.appendChild(profile);
  const followers = document.createElement('p');
  followers.innerText = `Followers: ${data.followers}`;
  cardInfo.appendChild(followers);
  const following = document.createElement('p');
  following.innerText = `Following: ${data.following}`;
  cardInfo.appendChild(following);
  return card;
}
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

function getFollowers(username) {
  axios.get(`https://api.github.com/users/${username}/followers`).then(r=>r.data.forEach(f=>newCard(f.login)));
}
getFollowers('kevinstonge');

["tetondan","dustinmyers","justsml","luishrd","bigknell"].forEach(u=>newCard(u));
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
