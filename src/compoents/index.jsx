import { memo } from "react"

const ProductList = memo(({ onFilter }) => {
  console.log("ProductList rendered")

  return (
    <>
      <h2>Products</h2>
      <button onClick={onFilter}>Filter Price > 1000</button>
    </>
  )
})

export default ProductList

