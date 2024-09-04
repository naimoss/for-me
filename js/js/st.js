$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'com.science.technologie.dz.univ&')});
$('a#mob').each(function(){ this.href=this.href.replace('https://drive.google.com/open?id=', 'com.science.technologie.dz.univ&')});

   window.onload = function() {
     Swal.fire({
  icon: 'error',
  title: '<a href="market://details?id=com.science.technologie.dz.univ" style=" font-family:exo 2;color: #000; ">Oops...</a>',
  text: 'Desole, cette version a rencontre de nombreuses erreurs, tres peu de documents. Veuillez mettre a jour vers la derniere version pour continuer à utiliser l"application. Merci',
  footer: '<a href="market://details?id=com.science.technologie.dz.univ" style="font-size: large;color: #f00; ">Cliquez ici pour mettre à jour</a>'
})
    } 
