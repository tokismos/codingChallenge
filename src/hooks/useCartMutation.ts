import { CartOptions } from "@/types"

interface AddToCartParams {
  quantity: number
  variantId: string
  options: CartOptions
}

export const useCartMutation = () => {
  const addToCart = async ({
    quantity,
    variantId,
    options,
  }: AddToCartParams): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      console.log("Item added to cart:", { quantity, variantId, options })
      resolve()
    })
  }

  return { addToCart }
}
