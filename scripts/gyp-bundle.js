(function(){
  // === FONTS (all pages) ===
  var f=document.createElement('link');
  f.rel='stylesheet';
  f.href='https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700&family=Outfit:wght@400;600&display=swap';
  f.media='print';f.onload=function(){f.media='all'};
  document.head.appendChild(f);

  // === HOMEPAGE ONLY ===
  var root=document.getElementById('gyp-root');
  if(root){
    // HTML section injector
    fetch('https://cdn.jsdelivr.net/gh/CryptoCowboy/gyp-webflow-assets@main/homepage-combined.html')
    .then(function(x){return x.text()})
    .then(function(html){
      root.innerHTML=html;
      document.querySelectorAll('.faq-item__question').forEach(function(b){
        b.addEventListener('click',function(){b.closest('.faq-item').classList.toggle('active')});
      });
      var obs=new IntersectionObserver(function(entries){
        entries.forEach(function(i){
          if(i.isIntersecting){i.target.classList.add('visible');obs.unobserve(i.target)}
        });
      },{threshold:0.1});
      document.querySelectorAll('.fade-up,.fade-left').forEach(function(el){obs.observe(el)});
    });

    // Schema: LocalBusiness
    var s1=document.createElement('script');s1.type='application/ld+json';
    s1.text='[{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://www.goldenyearsprotection.net/#localbusiness","name":"Golden Years Protection","description":"Independent life insurance brokerage in Fort Worth, TX specializing in final expense, term life, whole life, IUL, mortgage protection, fixed annuities, and key person insurance.","url":"https://www.goldenyearsprotection.net","telephone":"+1-682-254-1786","email":"joe@goldenyearsprotection.net","priceRange":"$","image":"https://www.goldenyearsprotection.net/images/golden-years-protection-logo.png","address":{"@type":"PostalAddress","addressLocality":"Fort Worth","addressRegion":"TX","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":32.7555,"longitude":-97.3308},"areaServed":[{"@type":"City","name":"Fort Worth","addressRegion":"TX"},{"@type":"City","name":"Arlington","addressRegion":"TX"},{"@type":"City","name":"Dallas","addressRegion":"TX"},{"@type":"City","name":"Plano","addressRegion":"TX"},{"@type":"City","name":"Irving","addressRegion":"TX"},{"@type":"City","name":"Denton","addressRegion":"TX"},{"@type":"City","name":"Mansfield","addressRegion":"TX"},{"@type":"City","name":"Weatherford","addressRegion":"TX"}],"founder":{"@type":"Person","name":"Joe Rangel","jobTitle":"Licensed Insurance Broker"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"}],"sameAs":["https://www.facebook.com/goldenyearsprotection","https://www.linkedin.com/in/joerangel","https://www.instagram.com/goldenyearsprotection"]}]';
    document.head.append(s1);

    // Schema: WebSite
    var s2=document.createElement('script');s2.type='application/ld+json';
    s2.text='[{"@context":"https://schema.org","@type":"WebSite","@id":"https://www.goldenyearsprotection.net/#website","name":"Golden Years Protection","url":"https://www.goldenyearsprotection.net","description":"Independent life insurance brokerage in Fort Worth, TX specializing in final expense, term life, whole life, IUL, mortgage protection, fixed annuities, and key person insurance.","publisher":{"@id":"https://www.goldenyearsprotection.net/#organization"},"potentialAction":{"@type":"SearchAction","target":"https://www.goldenyearsprotection.net/?s={search_term_string}","query-input":"required name=search_term_string"}}]';
    document.head.append(s2);

    // Schema: Organization
    var s3=document.createElement('script');s3.type='application/ld+json';
    s3.text='[{"@context":"https://schema.org","@type":"Organization","@id":"https://www.goldenyearsprotection.net/#organization","name":"Golden Years Protection","url":"https://www.goldenyearsprotection.net","logo":"https://www.goldenyearsprotection.net/images/golden-years-protection-logo.png","description":"Independent life insurance brokerage in Fort Worth, TX specializing in final expense, term life, whole life, IUL, mortgage protection, fixed annuities, and key person insurance.","telephone":"+1-682-254-1786","email":"joe@goldenyearsprotection.net","address":{"@type":"PostalAddress","addressLocality":"Fort Worth","addressRegion":"TX","addressCountry":"US"},"founder":{"@type":"Person","name":"Joe Rangel","jobTitle":"Licensed Insurance Broker"},"contactPoint":{"@type":"ContactPoint","telephone":"+1-682-254-1786","contactType":"sales","areaServed":"US","availableLanguage":["English","Spanish"]}}]';
    document.head.append(s3);

    // Schema text fix
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function(s){
      s.text=s.text.replace(/15\+ A-rated carriers/g,'multiple A-rated carriers').replace(/15\+ A-rated insurance companies/g,'multiple A-rated insurance companies').replace(/15\+ carriers/g,'multiple A-rated carriers');
    });
  }
})();
