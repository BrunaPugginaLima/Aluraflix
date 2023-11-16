var listaFilmes = [
  "https://conteudo.imguol.com.br/c/colunas/c6/2020/05/25/jack-nicholson-iluminado-1-1590394957744_v2_900x506.jpg",
  "https://rodapedohorizonte.files.wordpress.com/2009/07/51vepeml2olss400eb9.jpg?w=309&h=309",
  "https://s2-techtudo.glbimg.com/_SNwRBXpexCnbUTYdqcvJ_AXpXw=/0x0:1200x700/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/c/u/JMc0NrTZGew6dSglJMSQ/mario-bros.jpg",
  "https://br.web.img3.acsta.net/pictures/13/12/18/20/56/273919.jpg"
];

var nomesFilmes = [
  "O Iluminado", "Pic of Destiny", "Super Mario Bros.", "Efeito Borboleta"
];

var i = 0;
while (i < listaFilmes.length) {
  if (listaFilmes[i].includes("jpg") || listaFilmes[i].includes("png")) {
    document.write(`<div><img src="${listaFilmes[i]}" alt="${nomesFilmes[i]}"><br><strong>${nomesFilmes[i]
    }</strong></div>`);
  }
  i++;
}