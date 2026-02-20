(function(){
  if(location.pathname!=='/')return;
  var h=document.head;
  var p=document.createElement('link');
  p.rel='preload';p.as='image';p.type='image/webp';
  p.href='https://cdn.jsdelivr.net/gh/CryptoCowboy/gyp-webflow-assets@main/images/hero-bg-'+(innerWidth>768?'desktop':'mobile')+'.webp';
  h.appendChild(p);
  var l=document.createElement('link');
  l.rel='stylesheet';
  l.href='https://cdn.jsdelivr.net/gh/CryptoCowboy/gyp-webflow-assets@main/homepage.css';
  h.appendChild(l);
})();
