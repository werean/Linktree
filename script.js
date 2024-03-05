// const html = document.documentElement serve para acessar um documento, nesse caso documentElement ele se refere ao html, em outros casos se usa outras coisas
// if (html.classList.contains("light") aqui ele verifica se na tag <HTML> contem a classe light, se conter ele remove se nao ele adiciona</HTML>
//html.classList.toggle("light"); aqui é uma forma simplificada de fazer onde o .toggle interpreta o codigo da mesma forma anterior

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }
  // }
  //querySelector é usado para encontrar elementos HTML usando seletores CSS (seletores seriam por exemplo ID ou CLass)
  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "mayke brito");
  } else {
    img.setAttribute("src", "./assets/maico.jpg");
    img.setAttribute("alt", "maicon o carro");
  }
}
