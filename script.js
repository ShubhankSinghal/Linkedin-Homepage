function toggle1() {
    var x = document.getElementById("dropdown-content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function toggle2() {
    var x = document.getElementById("recent");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function toggle3() {
    var x = document.getElementById("follow");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function toggle4() {
    var x = document.getElementById("dropdown-content1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function toggle5() {
    var x = document.getElementById("dropdown-content2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//event form
function myBtn() {
    document.getElementById("myModal").style.display = "block";
}

function closed() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}

function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
