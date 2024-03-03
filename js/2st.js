
$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'market://details?id=com.dst.edu&')});

   window.onload = function() {
  Swal.fire({
  icon: 'error',
title: '<a href="market://details?id=com.dst.edu" style=" font-family:exo 2;color: #000; ">Oops...</a>',
text: 'قم بتحديث التطبيق, فالتحديث رائع و نسخة جديدة بالكامل و خصائص ممتعة لن تجدها في التطبيقات الاخرى. لتعزيز تعلمك بطرق محفزة',  footer: '<a href="market://details?id=com.dst.edu" style="font-size: large;color: #f00; ">اضغط هنا لتحديث التطبيق</a>'
})
  } 
