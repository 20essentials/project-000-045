const d = document;
let rotacion = 0;

d.addEventListener("click", e => {
  if (e.target.matches(".center")) {
    

    rotacion += 45;
    e.target.style.setProperty("transform", `rotate(${rotacion}deg)`);
  }
})