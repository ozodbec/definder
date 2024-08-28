const form = document.querySelector(".search-bar");
const btn = document.querySelector(".btn");
const userName = document.querySelector(".user-title");
const userNameValue = document.querySelector("#input");
const bio = document.querySelector(".bio");
const repo = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const locationn = document.querySelector(".locationn p");
const twitter = document.querySelector(".twitter p");
const github = document.querySelector(".github p");
const company = document.querySelector(".company p");
const imgProfile = document.querySelector(".imgProfile");

const getData = (user) => {
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      userName.textContent = data.login;
      bio.textContent = data.bio || "This profile has no bio";
      repo.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      locationn.textContent = data.location || "Not Available";
      imgProfile.src = data.avatar_url || "https://picsum.photos/200";
      github.textContent = data.html_url || "Not Available";
      twitter.textContent = data.twitter_username
        ? `@${data.twitter_username}`
        : "Not Available";
      company.textContent = data.company || "Not Available";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    const username = userNameValue.value.trim();
    if (username) {
      getData(username);
    } else {
      alert("Iltimos Github profilingizni kiriting");
    }
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = userNameValue.value.trim();
  if (username) {
    getData(username);
  } else {
    alert("Iltimos Github profilingizni kiriting");
  }
});
