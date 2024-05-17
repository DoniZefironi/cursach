  var translations = {};

  function loadTranslations(callback) {
    fetch("translations.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        translations = data;
        callback();
      })
      .catch(function(error) {
        console.error("Error loading translations:", error);
      });
  }
  
  function changeLanguage() {
    var languageButton = document.getElementById("languageButton");
    var selectedLanguage = languageButton.textContent.toLowerCase();
  
    if (selectedLanguage === "русский") {
      selectedLanguage = "en";
      languageButton.textContent = "English";
    } else {
      selectedLanguage = "ru";
      languageButton.textContent = "Русский";
    }
  
    if (translations.hasOwnProperty(selectedLanguage)) {
      var translation = translations[selectedLanguage];
      document.getElementById("greeting").innerHTML = translation.greeting;
      document.getElementById("description").innerHTML = translation.description;
      document.getElementById("home").innerHTML = translation.home;
      document.getElementById("about").innerHTML = translation.about;
      document.getElementById("menu").innerHTML = translation.menu;
      document.getElementById("drinkmenu").innerHTML = translation.drinkmenu;
      document.getElementById("drinkmen").innerHTML = translation.drinkmen;
      document.getElementById("contact").innerHTML = translation.contact;
      document.getElementById("vauncher").innerHTML = translation.vauncher;
      document.getElementById("vaunchers").innerHTML = translation.vaunchers;
      document.getElementById("reserv").innerHTML = translation.reserv;
      document.getElementById("reservi").innerHTML = translation.reservi;
      document.getElementById("mesto").innerHTML = translation.mesto;
      document.getElementById("ivse").innerHTML = translation.ivse;
      document.getElementById("nashe").innerHTML = translation.nashe;
      document.getElementById("bron").innerHTML = translation.bron;
      document.getElementById("jivot").innerHTML = translation.jivot;
      document.getElementById("nashemenu").innerHTML = translation.nashemenu;
      document.getElementById("vievmenu").innerHTML = translation.vievmenu;
      document.getElementById("back").innerHTML = translation.back;
      document.getElementById("noback").innerHTML = translation.noback;
      document.getElementById("mi").innerHTML = translation.mi;
      document.getElementById("nujen").innerHTML = translation.nujen;
      document.getElementById("gift").innerHTML = translation.gift;
      document.getElementById("news").innerHTML = translation.news;
      document.getElementById("budte").innerHTML = translation.budte;
      document.getElementById("join").innerHTML = translation.join;
      document.getElementById("esli").innerHTML = translation.esli;
      document.getElementById("real").innerHTML = translation.real;
      document.getElementById("vino").innerHTML = translation.vino;
      document.getElementById("drugoe").innerHTML = translation.drugoe;
      document.getElementById("vse").innerHTML = translation.vse;
      document.getElementById("znak").innerHTML = translation.znak;
      document.getElementById("ja").innerHTML = translation.ja;
      document.getElementById("noch").innerHTML = translation.noch;
      document.getElementById("vtornkib").innerHTML = translation.vtornkib;
      document.getElementById("pat").innerHTML = translation.pat;
      document.getElementById("vtornkib1").innerHTML = translation.vtornkib;
      document.getElementById("pat1").innerHTML = translation.pat;
      document.getElementById("svjaz").innerHTML = translation.svjaz;
      document.getElementById("chtob").innerHTML = translation.chtob;
      document.getElementById("dlya").innerHTML = translation.dlya;
      document.getElementById("tek").innerHTML = translation.tek;
      document.getElementById("poz").innerHTML = translation.poz;
      document.getElementById("openkart").innerHTML = translation.openkart;
      document.getElementById("chas").innerHTML = translation.chas;
      document.getElementById("slova").innerHTML = translation.slova;
      document.getElementById("photo").innerHTML = translation.photo;
      document.getElementById("disain").innerHTML = translation.disain;
      document.getElementById("socialen").innerHTML = translation.socialen;
      document.getElementById("dostavka").innerHTML = translation.dostavka;
    } else {
      console.error("Перевод недоступен для выбранного языка.");
    }
  }
  loadTranslations(function() {
  
    var languageButton = document.getElementById("languageButton");
    languageButton.textContent = "Русский";
  
    var initialLanguage = "ru";
    var initialTranslation = translations[initialLanguage];
    document.getElementById("greeting").innerHTML = initialTranslation.greeting;
    document.getElementById("description").innerHTML = initialTranslation.description;
    document.getElementById("home").innerHTML = initialTranslation.home;
    document.getElementById("about").innerHTML = initialTranslation.about;
    document.getElementById("menu").innerHTML = initialTranslation.menu;
    document.getElementById("drinkmenu").innerHTML = initialTranslation.drinkmenu;
    document.getElementById("drinkmen").innerHTML = initialTranslation.drinkmen;
    document.getElementById("contact").innerHTML = initialTranslation.contact;
    document.getElementById("vauncher").innerHTML = initialTranslation.vauncher;
    document.getElementById("vaunchers").innerHTML = initialTranslation.vaunchers;
    document.getElementById("reserv").innerHTML = initialTranslation.reserv;
    document.getElementById("reservi").innerHTML = initialTranslation.reservi;
    document.getElementById("mesto").innerHTML = initialTranslation.mesto;
    document.getElementById("ivse").innerHTML = initialTranslation.ivse;
    document.getElementById("nashe").innerHTML = initialTranslation.nashe;
    document.getElementById("bron").innerHTML = initialTranslation.bron;
    document.getElementById("jivot").innerHTML = initialTranslation.jivot;
    document.getElementById("nashemenu").innerHTML = initialTranslation.nashemenu;
    document.getElementById("vievmenu").innerHTML = initialTranslation.vievmenu;
    document.getElementById("noback").innerHTML = initialTranslation.noback;
    document.getElementById("back").innerHTML = initialTranslation.back;
    document.getElementById("mi").innerHTML = initialTranslation.mi;
    document.getElementById("nujen").innerHTML = initialTranslation.nujen;
    document.getElementById("gift").innerHTML = initialTranslation.gift;
    document.getElementById("news").innerHTML = initialTranslation.news;
    document.getElementById("budte").innerHTML = initialTranslation.budte;
    document.getElementById("join").innerHTML = initialTranslation.join;
    document.getElementById("real").innerHTML = initialTranslation.real;
    document.getElementById("drugoe").innerHTML = initialTranslation.drugoe;
    document.getElementById("vse").innerHTML = initialTranslation.vse;
    document.getElementById("esli").innerHTML = initialTranslation.esli;
    document.getElementById("vino").innerHTML = initialTranslation.vino;
    document.getElementById("znak").innerHTML = initialTranslation.znak;
    document.getElementById("ja").innerHTML = initialTranslation.ja;
    document.getElementById("noch").innerHTML = initialTranslation.noch;
    document.getElementById("vtornkib").innerHTML = initialTranslation.vtornkib;
    document.getElementById("pat").innerHTML = initialTranslation.pat;
    document.getElementById("vtornkib1").innerHTML = initialTranslation.vtornkib;
    document.getElementById("pat1").innerHTML = initialTranslation.pat;
    document.getElementById("svjaz").innerHTML = initialTranslation.svjaz;
    document.getElementById("chtob").innerHTML = initialTranslation.chtob;
    document.getElementById("dlya").innerHTML = initialTranslation.dlya;
    document.getElementById("tek").innerHTML = initialTranslation.tek;
    document.getElementById("poz").innerHTML = initialTranslation.poz;
    document.getElementById("openkart").innerHTML = initialTranslation.openkart;
    document.getElementById("chas").innerHTML = initialTranslation.chas;
    document.getElementById("slova").innerHTML = initialTranslation.slova;
    document.getElementById("photo").innerHTML = initialTranslation.photo;
    document.getElementById("disain").innerHTML = initialTranslation.disain;
    document.getElementById("dostavka").innerHTML = initialTranslation.dostavka;
  });