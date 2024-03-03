
$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'market://details?id=com.bem.docs&')});

   window.onload = function() {
  Swal.fire({
  icon: 'error',
title: '<a href="market://details?id=com.bem.docs" style=" font-family:exo 2;color: #000; ">Oops...</a>',
text: 'قمنا بتحديث كامل للتطبيق, فالتحديث اكثر من رائع و نسخة جديدة بالكامل و خصائص ممتعة لن تجدها في التطبيقات الاخرى. لتعزيز تعلمك بطرق محفزة',  footer: '<a href="market://details?id=com.bem.docs" style="font-size: large;color: #f00; ">اضغط هنا لتحديث التطبيق</a>'
})
  } 
