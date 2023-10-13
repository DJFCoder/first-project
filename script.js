function toogleMode() {
  //troca do tema

  //encontrar o texto
  const html = document.documentElement
  //aplicar a mudança
  html.classList.toggle("light")

  //troca da imagem
  // encontrar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se estiver em light-mode
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se estiver em dark-mode
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.documentElement
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Icone JuanDEV-light")
  } else {
    img.setAttribute("alt", "Icone JuanDEV-dark")
  }
}
