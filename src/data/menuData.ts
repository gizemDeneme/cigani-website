export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: 'Başlangıçlar',
    items: [
      { name: 'Zeytinyağlı Enginar', description: 'Taze enginar, limon ve dereotu ile', price: '₺85' },
      { name: 'Humus', description: 'Nohut püresi, tahin ve zeytinyağı', price: '₺65' },
      { name: 'Deniz Mahsüllü Salata', description: 'Karides, kalamar, taze yeşillikler', price: '₺120' }
    ]
  },
  {
    category: 'Ana Yemekler',
    items: [
      { name: 'Levrek Izgara', description: 'Taze levrek, sebze garnitürü ile', price: '₺180' },
      { name: 'Kuzu Pirzola', description: 'Ege otları ile marine edilmiş', price: '₺220' },
      { name: 'Mantar Risotto', description: 'Vahşi mantarlar ve parmesan peyniri', price: '₺140' },
      { name: 'Deniz Mahsüllü Makarna', description: 'Karides, midye, safran sosu', price: '₺160' }
    ]
  },
  {
    category: 'Tatlılar',
    items: [
      { name: 'Tiramisu', description: 'Geleneksel İtalyan tatlısı', price: '₺75' },
      { name: 'Çikolatalı Sufle', description: 'Sıcak çikolata sufle, dondurma ile', price: '₺85' },
      { name: 'Baklava', description: 'Fıstıklı baklava, kaymak ile', price: '₺70' }
    ]
  }
]; 