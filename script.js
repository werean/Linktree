// const html = document.documentElement serve para acessar um documento, nesse caso documentElement ele se refere ao html, em outros casos se usa outras coisas
// if (html.classList.contains("light") aqui ele verifica se na tag <HTML> contem a classe light, se conter ele remove se nao ele adiciona</HTML>
//html.classList.toggle("light"); aqui é uma forma simplificada de fazer onde o .toggle interpreta o codigo da mesma forma anterior

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg");
    img.setAttribute("alt", "mayke brito");
  } else {
    img.setAttribute("src", "./assets/avatar.jpg");
    img.setAttribute("alt", "maicon o carro");
  }
}
