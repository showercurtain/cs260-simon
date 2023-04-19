const scores = localStorage.getItem("scores")
let table = document.querySelector("table#score-table")

let tbody = document.createElement("tbody")
for (let score in scores) {
    let tr = document.createElement("tr");
    let tmp = document.createElement("th");
    tmp.innerHTML = score["num"];
    tr.appendChild(tmp);
    tmp = document.createElement("th");
    tmp.innerHTML = score["name"];
    tr.appendChild(tmp);
    tmp = document.createElement("th");
    tmp.innerHTML = score["score"];
    tr.appendChild(tmp);
    tmp = document.createElement("th");
    tmp.innerHTML = score["date"];
    tr.appendChild(tmp);
}