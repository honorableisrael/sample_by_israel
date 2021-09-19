function myShowHideFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    return (x.type = "text");
  } else {
    x.type = "password";
  }
}

function showhide() {
  console.log("showing");
  let element = document.getElementById("mobilesideclass");
  element.classList.toggle("firstshow");
  // element.className.splice(1,0)
}
function hidesidenav() {
  let element = document.getElementById("mobilesideclass");
  console.log(element.className.split(""));
  if (!element.className.includes("secondhide")) {
    // element.className= [""]
    console.log("hidinghere");
    return;
  }
  console.log("oops");
  element.classList.toggle("secondhide");
}

//hidenav function ends


// multiple checkboxes
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}