// Burger

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', () =>
{
    burger.classList.toggle('active');
    menubar.classList.toggle('active');
});

// Products

const products = [
    {
      id: 0,
      name: "Iphone 11",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "iphone",
      price: 2999.99,
      image: "./images/iphone-11.jpg",
      sale: true,
      saleAmount: 200,
    },
    {
      id: 1,
      name: "Iphone 13",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "iphone",
      price: 5200.5,
      image: "./images/iphone-13.jpg",
    },
    {
      id: 2,
      name: "Iphone 12",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "iphone",
      price: 4444.44,
      image: "./images/Iphone-12.jpg",
      sale: true,
      saleAmount: 451,
    },
    {
      id: 3,
      name: "huawei p50 pro",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "huawei",
      price: 1330,
      image: "./images/huawei-2.jpg",
    },
    {
      id: 4,
      name: "huawei p20 lite",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "huawei",
      price: 2250,
      image: "./images/huawei-1.jpg",
    },
    {
      id: 5,
      name: "Nokia c300",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "nokia",
      price: 950,
      image: "./images/Nokia.jpg",
      sale: true,
      saleAmount: 250,
    },
    {
      id: 6,
      name: "Nokia n70",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "nokia",
      price: 690,
      image: "./images/Nokia-2.jpg",
    },
    {
      id: 7,
      name: "Samsung a53",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "samsung",
      price: 1440,
      image: "./images/Samsung-a53.jpg",
    },
    {
      id: 8,
      name: "Samsung s20",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "samsung",
      price: 2620.2,
      image: "./images/Samsung-s20.jpg",
      sale: true,
      saleAmount: 300,
    },
    {
      id: 9,
      name: "Samsung s22",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "samsung",
      price: 3399.99,
      image: "./images/Samsung-s22.jpg",
    },
  ];

  const currentProduct = products;
  const categories = new Set();
  const categoriesSection = document.querySelector('.categories-items');
  const productSection = document.querySelector('.products');

const renderCategories = (item) =>
{
    for(let i = 0; i < item.length; i++)
    {
        categories.add(item[i].category);
    }

    categories.forEach(category =>
        {
            const newCategory = document.createElement('button');
            newCategory.className = 'category-item';
            newCategory.innerHTML = category;

            categoriesSection.appendChild(newCategory);
        });
    
}
  const renderProducts = (item) =>
  {
    for(let i = 0; i<item.length; i++)
    {
      const newproduct = document.createElement('div');
      newproduct.className = 'product-item';
      newproduct.innerHTML = `  <img src="${item[i].image}" alt="product-image" class="product-image">
      <p class="product-name">${item[i].name}</p>
      <p class="product-description">${item[i].description}</p>
      <p class="product-price">${item[i].price.toFixed(2)} zł</p>`

      productSection.appendChild(newproduct);
    }
  }
  document.onload = renderProducts(currentProduct);
  document.onload = renderCategories(currentProduct);

