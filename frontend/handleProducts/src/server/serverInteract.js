// CreateProduct.
const createProduct =  async (newProduct)=>{
    const res = await fetch('/api/products',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newProduct)})
    const data = await res.json()    
    return data;
}

// get all products :
const fetchProducts = async ()=>{
    const res = await fetch('/api/products')
    const data = await res.json()
    return data.data;
}
const getProduct = async (productId)=>{
    const res = await fetch(`/api/products/${productId}`);
    const data = await res.json();
    return data;
}

// delete product
const deleteProduct = async (productId)=>{
    const res = await fetch(`/api/products/${productId}`,{
        method:'DELETE',
    })
    const data = await res.json();
    return data;
}

// update product
const updateProduct = async (newProductInfo, productId)=>{
    const res = await fetch(`/api/products/${productId}`,{
        method:'PUT',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newProductInfo)
    });
    const data = await res.json();
    return data;
}

export {
    createProduct,
    fetchProducts,
    deleteProduct,
    updateProduct,
    getProduct,
}
