import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Nav & Footer
    'nav.home': 'Home',
    'nav.collection': 'Collection',
    'nav.about': 'About',
    'nav.store': 'Our Store',
    'nav.contact': 'Contact',
    'nav.shop_vinted': 'Shop Vinted',
    'footer.desc': "A curated women's boutique offering elegant, contemporary styles. Visit us in-store or shop our exclusive finds online via Vinted.",
    'footer.explore': 'Explore',
    'footer.visit': 'Visit Us',
    'footer.rights': 'All rights reserved.',
    'footer.crafted': 'Crafted for elegance.',

    // Home
    'home.hero.subtitle': 'New Arrivals',
    'home.hero.title1': 'Timeless Elegance,',
    'home.hero.title2': 'Modern Edge.',
    'home.hero.desc': "Discover our curated collection of women's apparel. Available at our local boutique and exclusively online via Vinted.",
    'home.hero.btn_col': 'View Collection',
    'home.hero.btn_vinted': 'Shop on Vinted',
    'home.feat.title': 'Curated Selections',
    'home.feat.desc': 'Hand-picked pieces from our latest lookbook, combining comfort with uncompromising style.',
    'home.feat.see_all': 'See All Pieces',
    'home.feat.view_vinted': 'View on Vinted',
    'home.feat.check_vinted': 'Check Vinted for price',
    'home.feat.empty': 'Our collection is currently being updated. Please check back soon.',
    'home.value.title1': 'Where distinctive style meets',
    'home.value.title2': 'everyday confidence.',
    'home.value.desc': 'At Rajesh Fashion, we believe in fashion that empowers. Each piece in our boutique is thoughtfully selected to offer quality, elegance, and a touch of the extraordinary. Discover your next wardrobe staple with us.',
    'home.value.read_story': 'Read Our Story',

    // About
    'about.subtitle': 'Our Story',
    'about.title1': 'A personal touch',
    'about.title2': 'to modern fashion.',
    'about.p1': "Rajesh Fashion was born out of a genuine passion for high-quality, thoughtfully designed women's wear. We believe that what you wear is an extension of who you are—and finding those perfect pieces shouldn't feel like a chore.",
    'about.p2': 'Starting as a small collection in the heart of our community, our boutique has grown into a beloved destination for both timeless staples and contemporary statement pieces. We hand-select every item to ensure it meets our standards of elegance, comfort, and durability.',
    'about.p3': 'Whether you visit our welcoming physical store or shop our curated edits on Vinted, our mission remains the same: to provide an intimate, trustworthy shopping experience that makes you feel confident and beautiful.',
    'about.stat.years': 'Years Experience',
    'about.stat.clients': 'Happy Clients',
    'about.quote': '"Style is a deeply personal expression. My goal is to help every woman find the pieces that make her feel unmistakably herself."',
    'about.quote.author': '— Founder, Rajesh Fashion',

    // Collection
    'col.title': 'The Collection',
    'col.desc': "Browse our carefully curated selection of women's apparel. Love what you see? Connect with us or purchase directly through our Vinted shop.",
    'col.showing': 'Showing {n} pieces',
    'col.new': 'New',
    'col.size': 'Size',
    'col.view_vinted': 'View on Vinted',
    'col.empty.title': 'No items found',
    'col.empty.desc': "We couldn't find any pieces in this category right now.",
    'col.empty.btn': 'View All',
    'col.cat.all': 'All',

    // Store
    'store.title': 'Visit Our Store',
    'store.desc': 'Experience our collection in person. Feel the fabrics, try on your favorite pieces, and let our team help you find your perfect fit.',
    'store.loc.title': 'Location',
    'store.hours.title': 'Opening Hours',
    'store.hours.mf': 'Monday - Friday',
    'store.hours.sat': 'Saturday',
    'store.hours.sun': 'Sunday',
    'store.btn': 'Get Directions',

    // Contact
    'contact.title': 'Get in touch',
    'contact.desc': "Have a question about a specific piece on Vinted? Need styling advice? We're always here to help you find exactly what you're looking for.",
    'contact.email': 'Email Us',
    'contact.call': 'Call Us',
    'contact.wa': 'WhatsApp',
    'contact.wa.desc': 'Message us for quick replies',
    'contact.shop': 'Shop Online',
    'contact.shop.btn': 'Visit our Vinted Wardrobe',
    'contact.form.title': 'Send us a message',
    'contact.form.sent.title': 'Message Sent',
    'contact.form.sent.desc': 'Thank you for reaching out. We will get back to you shortly.',
    'contact.form.name': 'Full Name',
    'contact.form.name.ph': 'Jane Doe',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.subject.ph': 'Inquiry about a Vinted item',
    'contact.form.msg': 'Message',
    'contact.form.msg.ph': 'How can we help you?',
    'contact.form.btn': 'Send Message'
  },
  nl: {
    // Nav & Footer
    'nav.home': 'Home',
    'nav.collection': 'Collectie',
    'nav.about': 'Over Ons',
    'nav.store': 'Onze Winkel',
    'nav.contact': 'Contact',
    'nav.shop_vinted': 'Shop Vinted',
    'footer.desc': "Een boetiek voor dames die elegante, eigentijdse stijlen biedt. Bezoek onze winkel of shop onze exclusieve vondsten online via Vinted.",
    'footer.explore': 'Ontdekken',
    'footer.visit': 'Bezoek Ons',
    'footer.rights': 'Alle rechten voorbehouden.',
    'footer.crafted': 'Gemaakt voor elegantie.',

    // Home
    'home.hero.subtitle': 'Nieuwe Collectie',
    'home.hero.title1': 'Tijdloze Elegantie,',
    'home.hero.title2': 'Moderne Rand.',
    'home.hero.desc': "Ontdek onze zorgvuldig geselecteerde dameskleding. Verkrijgbaar in onze lokale boetiek en exclusief online via Vinted.",
    'home.hero.btn_col': 'Bekijk Collectie',
    'home.hero.btn_vinted': 'Shop op Vinted',
    'home.feat.title': 'Gecureerde Selecties',
    'home.feat.desc': 'Zorgvuldig geselecteerde stukken uit ons nieuwste lookbook, waarbij comfort wordt gecombineerd met een compromisloze stijl.',
    'home.feat.see_all': 'Bekijk Alle Stukken',
    'home.feat.view_vinted': 'Bekijk op Vinted',
    'home.feat.check_vinted': 'Bekijk Vinted voor prijs',
    'home.feat.empty': 'Onze collectie wordt momenteel bijgewerkt. Kom snel terug.',
    'home.value.title1': 'Waar kenmerkende stijl',
    'home.value.title2': 'dagelijks vertrouwen ontmoet.',
    'home.value.desc': 'Bij Rajesh Fashion geloven we in mode die kracht geeft. Elk stuk in onze boetiek is zorgvuldig geselecteerd om kwaliteit, elegantie en een vleugje van het buitengewone te bieden. Ontdek uw volgende garderobe-item bij ons.',
    'home.value.read_story': 'Lees Ons Verhaal',

    // About
    'about.subtitle': 'Ons Verhaal',
    'about.title1': 'Een persoonlijke toets',
    'about.title2': 'aan moderne mode.',
    'about.p1': "Rajesh Fashion is ontstaan uit een oprechte passie voor hoogwaardige, doordacht ontworpen dameskleding. Wij geloven dat wat u draagt een verlengstuk is van wie u bent—en het vinden van die perfecte stukken zou geen klus moeten zijn.",
    'about.p2': 'Begonnen als een kleine collectie in het hart van onze gemeenschap, is onze boetiek uitgegroeid tot een geliefde bestemming voor zowel tijdloze basisstukken als eigentijdse blikvangers. Wij selecteren elk item met de hand om ervoor te zorgen dat het voldoet aan onze normen voor elegantie, comfort en duurzaamheid.',
    'about.p3': 'Of u nu onze gastvrije fysieke winkel bezoekt of onze samengestelde selecties op Vinted shopt, onze missie blijft hetzelfde: een intieme, betrouwbare winkelervaring bieden die u zich zelfverzekerd en mooi laat voelen.',
    'about.stat.years': 'Jaren Ervaring',
    'about.stat.clients': 'Tevreden Klanten',
    'about.quote': '"Stijl is een diep persoonlijke uiting. Mijn doel is om elke vrouw te helpen de stukken te vinden waardoor ze zich onmiskenbaar zichzelf voelt."',
    'about.quote.author': '— Oprichter, Rajesh Fashion',

    // Collection
    'col.title': 'De Collectie',
    'col.desc': "Bekijk onze zorgvuldig geselecteerde selectie dameskleding. Zie je iets wat je leuk vindt? Neem contact met ons op of koop direct via onze Vinted-shop.",
    'col.showing': 'Toont {n} stukken',
    'col.new': 'Nieuw',
    'col.size': 'Maat',
    'col.view_vinted': 'Bekijk op Vinted',
    'col.empty.title': 'Geen items gevonden',
    'col.empty.desc': "We konden momenteel geen stukken in deze categorie vinden.",
    'col.empty.btn': 'Bekijk Alles',
    'col.cat.all': 'Alles',

    // Store
    'store.title': 'Bezoek Onze Winkel',
    'store.desc': 'Ervaar onze collectie persoonlijk. Voel de stoffen, pas uw favoriete stukken en laat ons team u helpen uw perfecte pasvorm te vinden.',
    'store.loc.title': 'Locatie',
    'store.hours.title': 'Openingstijden',
    'store.hours.mf': 'Maandag - Vrijdag',
    'store.hours.sat': 'Zaterdag',
    'store.hours.sun': 'Zondag',
    'store.btn': 'Routebeschrijving',

    // Contact
    'contact.title': 'Neem contact op',
    'contact.desc': "Heb je een vraag over een specifiek stuk op Vinted? Stijladvies nodig? We zijn er altijd om je te helpen precies te vinden wat je zoekt.",
    'contact.email': 'E-mail Ons',
    'contact.call': 'Bel Ons',
    'contact.wa': 'WhatsApp',
    'contact.wa.desc': 'Stuur ons een bericht voor snelle reacties',
    'contact.shop': 'Shop Online',
    'contact.shop.btn': 'Bezoek onze Vinted Garderobe',
    'contact.form.title': 'Stuur ons een bericht',
    'contact.form.sent.title': 'Bericht Verzonden',
    'contact.form.sent.desc': 'Bedankt voor uw bericht. We nemen spoedig contact met u op.',
    'contact.form.name': 'Volledige Naam',
    'contact.form.name.ph': 'Jane Doe',
    'contact.form.email': 'E-mailadres',
    'contact.form.subject': 'Onderwerp',
    'contact.form.subject.ph': 'Vraag over een Vinted item',
    'contact.form.msg': 'Bericht',
    'contact.form.msg.ph': 'Hoe kunnen we je helpen?',
    'contact.form.btn': 'Verstuur Bericht'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('rajesh_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('rajesh_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key, variables = {}) => {
    let text = translations[language]?.[key] || translations['en']?.[key] || key;
    
    // Replace any variables passed
    Object.keys(variables).forEach(vKey => {
      text = text.replace(`{${vKey}}`, variables[vKey]);
    });
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);