import { useState } from "react"

import { AddToCartButton, ColorSelector, SeatingSelector } from "@/components"
import { mockConfiguratorData } from "@/mockData"
import { useSeatingConfig } from "@/hooks"
import { ErrorMessage, Loader, SeatingWrapper } from "./styles"

const SeatingConfigurator = () => {
  const { collectionTitle, seating, price, colorsData, configId } = {
    ...mockConfiguratorData,
  }

  const { configSelected, error, isLoading, additionalConfig, handleConfig } =
    useSeatingConfig(configId, seating)

  const [errorMessage, setErrorMessage] = useState("")

  if (isLoading) {
    return (
      <SeatingWrapper>
        <Loader>Loading configurations...</Loader>
      </SeatingWrapper>
    )
  }

  if (!additionalConfig) {
    return <ErrorMessage>No configuration data available</ErrorMessage>
  }
  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  }

  return (
    <SeatingWrapper>
      <ColorSelector
        selectedColor={configSelected.color}
        setColor={(color) => handleConfig({ color: color.value })}
        colors={colorsData}
      />
      <SeatingSelector
        onSelect={handleConfig}
        selectedSeating={configSelected.seating}
        additionalConfig={additionalConfig}
      />

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <AddToCartButton
        configSelected={configSelected}
        price={price?.value}
        configId={configId}
        setErrorMessage={setErrorMessage}
      />
    </SeatingWrapper>
  )
}

export default SeatingConfigurator
