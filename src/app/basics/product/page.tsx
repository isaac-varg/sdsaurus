import Providers from "@/components/Providers"
import ProductForm from "./Form"
import PageTitle from "@/components/PageTitle";

const ProductInfo = async () => {

  return (
    <div>
      <PageTitle title="Product Information" />
      <Providers>
        <ProductForm />
      
      </Providers>
    </div>
  )
}

export default ProductInfo