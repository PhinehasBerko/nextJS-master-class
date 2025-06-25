import React from 'react'

const ReviewById = async(
    {params}:{params:Promise<{productId:string,reviewId:string}>}
) => {
    const {productId,reviewId} = (await params)
  return (
    <div>
        <h2>Review {reviewId} for Product Details of {productId} </h2>
    </div>
  )
}

export default ReviewById