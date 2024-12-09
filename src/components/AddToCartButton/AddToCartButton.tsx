import React from "react"

import { useRouter } from "next/router"
import { ConfigSelectionData } from "@/types"
import { useCartMutation } from "@/hooks"
import { calculateCozeyCarePrice } from "@/helpers"
import { AddToCartContainer, StyledAddToCartButton } from "./styles"

interface AddToCartButtonProps {
  price: number
  setErrorMessage: (arg: string) => void
  disabled?: boolean
  configSelected: ConfigSelectionData
  className?: string
  configId: string
}

export const AddToCartButton = ({
  price,
  configSelected,
  disabled = false,
  setErrorMessage,
  configId,
  className = "",
}: AddToCartButtonProps) => {
  const router = useRouter()

  const { addToCart } = useCartMutation()

  const totalPrice = price + calculateCozeyCarePrice(price)

  const handleAddToCart = () => {
    if (!configSelected?.color || !configSelected?.seating) {
      setErrorMessage("Please select both a color and a seating option")
      return
    }
    setErrorMessage(null)

    addToCart({
      quantity: 1,
      variantId: configId,
      options: {
        color: configSelected.color,
        seating: configSelected.seating,
      },
    })
      .then(() => {
        router.push("/cart")
      })
      .catch(() => {
        setErrorMessage("Failed to add item to cart")
      })
  }

  return (
    <AddToCartContainer>
      <StyledAddToCartButton
        type="button"
        onClick={handleAddToCart}
        className={className}
        disabled={disabled}
      >
        {`Add to Cart - $${totalPrice}`}
      </StyledAddToCartButton>
    </AddToCartContainer>
  )
}
