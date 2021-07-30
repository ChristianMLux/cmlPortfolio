let repos = [];
let gitListDOM = document.getElementById("gitList");

class Repo {
  constructor(descriptionInc, urlInc) {
    this.description = descriptionInc;
    this.url = urlInc;
  }
  getRepos() {
    fetch("https://api.github.com/users/christianmlux/repos")
      .then((response) => response.json())
      .then((data) => repos.push(data));
  }
}

let repo = new Repo();

initApp();
function initApp() {
  repo.getRepos();
  console.log(repos);
}
