interface ShowProduct {
    id: number;
    title: string;
    price: number;
    description: string;
  }

async function getProduct():Promise<ShowProduct[]|undefined>{
    try{
        const res=await fetch("https://fakestoreapi.in/api/products")
        if(!res.ok) throw new Error('fail data fetch')
            const data =await res.json()
        return data.products
    }catch (error){
        console.error('Error fetching:', error);
    }
}

async function HomePage(){
    const products=await getProduct()
console.log(products)
    if(!products){
        return "Error on loading product"
        console.log(products)
    }
    return(
        <div>
           {products.map((product)=>{
           return <div
           className="flex items-center ml-l"
            key={product.id}>{product.title}</div> 
           })}
        </div>
    )
}
export default HomePage;