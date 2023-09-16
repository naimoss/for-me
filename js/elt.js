
$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'market://details?id=com.electrotechnique.dz.univ&')});

   window.onload = function() {
     Swal.fire({
  icon: 'error',
  title: '<a href="market://details?id=com.electrotechnique.dz.univ" style=" font-family:exo 2;color: #000; ">Oops...</a>',
  text: 'Désolé, cette version a rencontré de nombreuses erreurs, très peu de documents. Veuillez mettre à jour vers la dernière version pour continuer à utiliser l"application. Merci',
  footer: '<a href="market://details?id=com.electrotechnique.dz.univ" style="font-size: large;color: #f00; ">Cliquez ici pour mettre à jour</a>'
})
    } 

