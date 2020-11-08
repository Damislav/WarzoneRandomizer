var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// randomize
var list = document.getElementById("myUL"),
  button = document.getElementById("shuffle");
function shuffle(items) {
  var cached = items.slice(0),
    temp,
    i = cached.length,
    rand;
  while (--i) {
    rand = Math.floor(i * Math.random());
    temp = cached[rand];
    cached[rand] = cached[i];
    cached[i] = temp;
  }
  return cached;
}
function shuffleNodes() {
  var nodes = list.children,
    i = 0;
  nodes = Array.prototype.slice.call(nodes);
  nodes = shuffle(nodes);
  while (i < nodes.length) {
    list.appendChild(nodes[i]);
    ++i;
  }
}
button.onclick = shuffleNodes;

// $(document).ready(function () {
//   $("#myUL > li:eq(0)").appendTo("#team-red");
// });

$("#target").click(function () {
  alert("Handler for .click() called.");
});
// let teamRed = document.getElementById("team-red");
// let teamBlue = document.getElementById("team-red");

// teamRed = myUl.shift();

// console.log(teamRed);
