$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'com.genie.electrique.doc&')});
$('a#mob').each(function(){ this.href=this.href.replace('https://drive.google.com/open?id=', 'com.genie.electrique.doc&')});

   window.onload = function() {
     Swal.fire({
  icon: 'error',
  title: '<a href="market://details?id=com.genie.electrique.doc" style=" font-family:exo 2;color: #000; ">Oops...</a>',
  text: 'Desole, cette version a rencontre de nombreuses erreurs, tres peu de documents. Veuillez mettre a jour vers la derniere version pour continuer à utiliser l"application. Merci',
  footer: '<a href="market://details?id=com.genie.electrique.doc" style="font-size: large;color: #f00; ">Cliquez ici pour mettre à jour</a>'
})
    } 
