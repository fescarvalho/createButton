const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  boxShadow(value) {
    this.element.style.boxShadow = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  color(value) {
    this.element.style.color = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
  width(value) {
    this.element.style.width = value + "px";
  },
};

controles.addEventListener("change", handleChange);

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);

  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  });

  showCss();
}
setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
