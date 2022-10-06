const items = [
  {
    id:1,
    href:"#",
    text:"Laptop văn phòng",
    icons:` "fas fa-laptop" `,
  },
  {
    id:2,
    href:"#",
    text:"PC Special",
    icons:` "fas fa-laptop" `,
  },
  {
    id:3,
    href:"#",
    text:"PC Gaming - Đồ họa",
    icons:` "fas fa-laptop" `,
  },
  {
    id:4,
    href:"#",
    text:"PC Doanh nghiệp",
    icons:` "fas fa-laptop" `,
  },
  {
    id:5,
    href:"#",
    text:"Linh kiện PC",
    icons:` "fas fa-laptop" `,
  },
  {
    id:6,
    href:"#",
    text:"Apple",
    icons:` "fas fa-laptop" `,
  },
  {
    id:7,
    href:"#",
    text:"Màn hình",
    icons:` "fas fa-laptop" `,
  },
  {
    id:8,
    href:"#",
    text:"Bàn phím",
    icons:` "fas fa-laptop" `,
  },
  {
    id:9,
    href:"#",
    text:"Chuột + lót chuột",
    icons:` "fas fa-laptop" `,
  },
  {
    id:10,
    href:"#",
    text:"Tai nghe + Loa",
    icons:` "fas fa-laptop" `,
  },
  {
    id:11,
    href:"#",
    text:"Ghế + Bàn",
    icons:` "fas fa-laptop" `,
  },
  {
    id:12,
    href:"#",
    text:"Console",
    icons:` "fas fa-laptop" `,
  },
  {
    id:13,
    href:"#",
    text:"Thiết bị văn phòng",
    icons:` "fas fa-laptop" `,
  },
  {
    id:14,
    href:"#",
    text:"Thiết bị mạng",
    icons:` "fas fa-laptop" `,
  },
  {
    id:15,
    href:"#",
    text:"Phụ kiện",
    icons:` "fas fa-laptop" `,
  },
]
const contain = document.querySelector('.myContain');

contain.innerHTML = items.map(item => 
  `
  <div class=" contain fs14">
    <button class="border-0">
      <i class=${item.icons} style="font-size:24px;"></i>                                    
    </button>   
    <span>${item.text}</span>                                     
    <a id="dropdown" class="text-decoration-none text-black" href="#">
      <i class="fas fa-angle-down"></i>
    </a>
  </div>
  `
).join('')
// ------------------------------------ END --------------------------------------------------------

const bottomItems = [
  {
    id:1,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "123456789",
  },
  {
    id:2,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "Tư vấn mua hàng",
  },
  {
    id:3,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "Tổng hợp khuyến mãi",
  },
  {
    id:4,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "Chính sách vận chuyển",
  },
  {
    id:5,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "Chính sách bảo hành",
  },
  {
    id:6,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "Chính sách trả góp",
  },
  {
    id:7,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "Hướng dẫn thanh toán",
  },
  {
    id:8,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "Giỏ hàng của bạn",
  },
  {
    id:9,
    href:"#",
    icons:` "fas fa-laptop" `,
    text: "Giải đáp - Thủ thuật",
  },
]
const bottom = document.querySelector('.bottomItems');

bottom.innerHTML = bottomItems.map(bottomItem => 
  `
  <div class="contain fs14">
    <a href=${bottomItem.href} class="text-decoration-none text-black">
      <i class=${bottomItem.icons} style="font-size:24px;"></i>
      <span>${bottomItem.text}</span>
    </a>
  </div>
  `
).join('')
// ------------------------------------ END --------------------------------------------------------
const menu_a = document.querySelector('.menu-a');

menu_a.innerHTML = items.map(item => 
  `
  <button class="border-0">
    <a href=${item.href} class="text-decoration-none text-black fs13">
      <i class=${item.icons}></i>
      <span>${item.text}</span>
    </a>
  </button>
  `
).join('')
//-------------------------------------------------------------------------------------------------------------
const cardItems = [
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
  {
    href:"#",
    src:"images/card.webp",
    tag_product:"Bestseller",
    discount:"-25%",
    name:"Laptop gaming MSI Katana GF66 11UC 224VN",
    old_price:"29,990,000₫",
    price:"22,490,000₫",
    href_order:"#",
  },
]
const card = document.querySelector('#items');

card.innerHTML = cardItems.map(cardItem => 
  `
  <div class="card col-fix20">
    <a href=${cardItem.href} class="text-dark text-decoration-none">
      <img src=${cardItem.src} class="card-img-top" alt="card"> 
      <span class="tag-product text-white text-capitalize">${cardItem.tag_product}</span>
      <div class="discount">${cardItem.discount}</div>                  
      <div class="card-body">
        <h2>${cardItem.name}</h2>
        <div class="product-price">
          <del>${cardItem.old_price}</del>
          <div class="price fw-bold text-danger">${cardItem.price}</div>
        </div>         
        <button type="button" class="w-100">
            <a href=${cardItem.href_order} class="text-dark text-decoration-none">
                  <span>Đặt hàng</span>
            </a>
        </button> 
      </div>                                                                                                       
    </a>              
  </div>
  
  `
).join('')

