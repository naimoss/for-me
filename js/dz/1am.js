  $('a').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'https://drive.google.com/open?id=')});
  Array.from(document.querySelectorAll('div.docs-category-2-info>a')).filter((el,i)=>i%2===1).forEach(el=>el.href=el.previousElementSibling.href.replace("https://drive.google.com/open?id=", "https://www.univdocs.com/p/apps.html?"))
$('a#mob').each(function(){ this.href=this.href.replace('https://docs.google.com/open?id=', 'page.html?=')});
