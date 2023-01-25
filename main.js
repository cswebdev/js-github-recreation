import myData from "./api.js";

const BASE_URL = "https://api.github.com/users/cswebdev";

// const repo = myData.repos_url;
const avatar = myData.avatar_url;
const login = myData.login;
const name = myData.name;
const bio = myData.bio;
const followers = myData.followers_url;
const following = myData.following_url;
const ORG_URL = "https://api.github.com/users/cswebdev/orgs";
const orgAvatar = orgData.avatar_url;
function generateHTML(data) {
   const source = document.querySelector("#aside-template").innerHTML;

   const template = Handlebars.compile(source);

   const html = template(data);
   document
      .querySelector(".profile-aside")
      .insertAdjacentHTML("afterbegin", html);
}

fetch(`${BASE_URL}`)
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      generateHTML(data);
   });

fetch(`${ORG_URL}`)
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      generateHTML(data);
   });

// fetch(`${organizations}`)
//    .then(function (response) {
//       return response.json();
//    })
//    .then(function (data) {
//       generateHTML(data);
//    });
