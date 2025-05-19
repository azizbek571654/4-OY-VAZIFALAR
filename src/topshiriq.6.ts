interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
  }

  function updateProduct(product: Product, updates: Partial<Product>): Product {
    return { ...product, ...updates };
  }
  
  const oldProduct: Product = {
    id: 1,
    name: "Telefon",
    price: 1200,
    description: "Yangi model"
  };
  
  const newProduct = updateProduct(oldProduct, {
    name: "Telefon Pro",
    price: 1400
  });
  
  console.log(newProduct);

  type BasicInfo = Pick<Product, 'id' | 'name'>;
  
  const productInfo: BasicInfo = {
    id: 2,
    name: "Noutbuk"
  };
  
  console.log(productInfo);
  
  const fixedProduct: Readonly<Product> = {
    id: 3,
    name: "Planshet",
    price: 800,
    description: "Oqish uchun"
  };
  
  // fixedProduct.price = 900; shu yerda TS hato brad
  