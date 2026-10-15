export const services = [
  {
    id: 'technical-seo',
    icon: 'solar:server-square-linear',
    title: 'Teknik SEO',
    description: 'Web sitenizin arama motorları tarafından kusursuz taranması ve indekslenmesi için kod yapısı, site hızı ve mimari optimizasyonları.',
    features: ['Core Web Vitals Optimizasyonu', 'Tarama Bütçesi Yönetimi', 'Site Mimarisi İyileştirme']
  },
  {
    id: 'content-strategy',
    icon: 'solar:document-text-linear',
    title: 'İçerik Stratejisi',
    description: 'Hedef kitlenizin arama niyetine uygun, yüksek dönüşüm sağlayan ve otorite inşa eden veri odaklı içerik planlaması.',
    features: ['Kapsamlı Anahtar Kelime Araştırması', 'Rakip İçerik Analizi', 'Topical Authority İnşası']
  },
  {
    id: 'link-building',
    icon: 'solar:link-linear',
    title: 'Otorite İnşası (Off-Page)',
    description: 'Sektörünüzdeki güvenilir kaynaklardan nitelikli backlinkler alarak alan adı otoritenizi güvenli bir şekilde artırma.',
    features: ['PR Odaklı Backlink Stratejisi', 'Zararlı Link Temizliği', 'Marka Bilinirliği Artışı']
  },
  {
    id: 'local-seo',
    icon: 'solar:map-point-linear',
    title: 'Yerel SEO',
    description: 'Bölgesel aramalarda görünürlüğünüzü artırarak fiziksel mağazanıza veya yerel hizmetlerinize daha fazla müşteri çekin.',
    features: ['Google My Business Optimizasyonu', 'Yerel Citation Yönetimi', 'Bölgesel Anahtar Kelime Hedefleme']
  }
];

export const blogPosts = [
  {
    id: 1,
    slug: '2024-seo-trendleri',
    title: '2024 Yılında Dikkate Almanız Gereken SEO Trendleri',
    excerpt: 'Yapay zeka devrimi arama motorlarını nasıl değiştiriyor? SGE (Search Generative Experience) döneminde hayatta kalma rehberi.',
    content: `
      <h2>Yapay Zeka ve SEO'nun Geleceği</h2>
      <p>Arama motoru optimizasyonu dünyası, yapay zeka entegrasyonlarıyla birlikte büyük bir dönüşüm geçiriyor. Geleneksel anahtar kelime doldurma taktikleri artık tamamen etkisiz.</p>
      <h3>Kullanıcı Niyeti Her Şeydir</h3>
      <p>Arama motorları artık kullanıcının "ne aradığından" çok "neden aradığını" anlamaya odaklanıyor. İçeriklerinizi oluştururken sadece soruları yanıtlamakla kalmayın, kullanıcının bir sonraki adımda neye ihtiyacı olacağını tahmin edin.</p>
      <h3>SGE (Search Generative Experience) Dönemi</h3>
      <p>Google'ın yapay zeka destekli arama deneyimi, bilgi odaklı aramalarda sıfırıncı sırayı yeniden tanımlıyor. Bu yeni alanda yer almak için içeriğinizin benzersiz bir değer ve kişisel deneyim (EEAT) sunması kritik önem taşıyor.</p>
    `,
    category: 'Trendler',
    date: '12 Mart 2024',
    readTime: '5 dk',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80'
  },
  {
    id: 2,
    slug: 'core-web-vitals-rehberi',
    title: 'Core Web Vitals Optimizasyonu: Pratik Bir Rehber',
    excerpt: 'LCP, FID ve CLS metriklerinizi iyileştirerek kullanıcı deneyimini mükemmelleştirin ve sıralamalarınızı artırın.',
    content: `
      <h2>Site Hızı Artık Bir Lüks Değil</h2>
      <p>Google'ın sayfa deneyimi güncellemesiyle birlikte Core Web Vitals metrikleri doğrudan bir sıralama faktörü haline geldi. Ancak bu metrikleri sadece Google için değil, kullanıcılarınız için iyileştirmelisiniz.</p>
      <h3>LCP (Largest Contentful Paint) Nasıl İyileştirilir?</h3>
      <p>Ana içeriğin yüklenme süresini temsil eden LCP'yi 2.5 saniyenin altında tutmak için görsel optimizasyonlarına, kritik CSS'in satır içi (inline) verilmesine ve hızlı sunucu yanıt sürelerine odaklanmalısınız.</p>
    `,
    category: 'Teknik SEO',
    date: '28 Şubat 2024',
    readTime: '8 dk',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: 3,
    slug: 'topical-authority-nedir',
    title: 'Topical Authority (Konu Otoritesi) Nasıl İnşa Edilir?',
    excerpt: 'Tekil anahtar kelimeler yerine kavramsal bütünlüğe odaklanarak nişinizde nasıl otorite olabilirsiniz?',
    content: `
      <h2>Anahtar Kelimeden Konu Kümelerine Geçiş</h2>
      <p>Arama motorları artık sayfaları tek tek değerlendirmek yerine web sitenizin belirli bir konudaki genel uzmanlığını ölçüyor. Topical Authority tam olarak budur.</p>
      <h3>Pillar Content (Temel İçerik) Stratejisi</h3>
      <p>Geniş bir konuyu kapsayan uzun formlu bir rehber hazırlayın ve bu rehberden spesifik alt başlıkları anlatan destekleyici içeriklere linkler verin. Bu yapı, arama motorlarına konuyu ne kadar derinlemesine anladığınızı gösterir.</p>
    `,
    category: 'İçerik Stratejisi',
    date: '15 Şubat 2024',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  }
];

export const clientLogos = [
  { name: 'Google', icon: 'simple-icons:google' },
  { name: 'Ahrefs', icon: 'simple-icons:ahrefs' },
  { name: 'Semrush', icon: 'simple-icons:semrush' },
  { name: 'Shopify', icon: 'simple-icons:shopify' },
  { name: 'WordPress', icon: 'simple-icons:wordpress' },
];