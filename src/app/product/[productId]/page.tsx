// This page renders dynamic content based on the params

const ProductDetails = async(
    {params}:{params:Promise<{productId:string}>}
) =>{
    const productId = (await params).productId
    return <h2>product details of {productId}</h2>
}

export default ProductDetails
