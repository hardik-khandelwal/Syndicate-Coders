var buttons = document.getElementsByName("sym");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
    } else {
      this.classList.add("selected");
    }
  });
}

const checkbox = document.getElementById("t-c");
const submitButton = document.getElementById("t-c-submit");
const head = document.getElementById("head");

checkbox.addEventListener("change", function () {
  submitButton.disabled = !this.checked;
});

var forms = document.getElementsByClassName("formContainer");
var headings = document.getElementsByTagName("h2");
var currentFormIndex = -1;

function showForm(index) {
  for (var i = 0; i < forms.length; i++) {
    forms[i].classList.remove("active");
    headings[i].classList.remove("underline");
    headings[i].classList.remove("color");
  }
  console.log(currentFormIndex);
  forms[index].classList.add("active");
  headings[index].classList.add("underline");
  headings[index].classList.add("color");
}

function nextForm() {
  if (currentFormIndex < forms.length - 1) {
    currentFormIndex++;
    showForm(currentFormIndex);
  }


  if (currentFormIndex == 0) {
    document.getElementById("backbtn").disabled = true;
    document.getElementById("heads").style.display = "flex";
    
  }
  if(currentFormIndex==1){
    // Get height and weight values from the form
var height = parseFloat((document.getElementById('height').value)/100); // in meters
var weight = parseFloat(document.getElementById('weight').value); // in kilograms
console.log(height,weight);
