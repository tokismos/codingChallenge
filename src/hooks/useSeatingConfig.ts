import { getInitialConfig } from "@/helpers"
import { ConfigSelectionData, Seating } from "@/types"
import { useState } from "react"
import { useGetAdditionalConfig } from "./useGetAdditionalConfig"

export const useSeatingConfig = (configId: string, initialConfig: Seating) => {
  const [configSelected, setConfigSelected] = useState<ConfigSelectionData>(
    getInitialConfig(initialConfig)
  )

  const { additionalConfig, isLoading, error } = useGetAdditionalConfig({
    configId,
  })

  const handleConfig = ({ color, seating }: Partial<ConfigSelectionData>) => {
    setConfigSelected((oldSelected) => ({
      color: color || oldSelected.color,
      seating: seating || oldSelected.seating,
    }))
  }

  return {
    configSelected,
    error,
    isLoading,
    additionalConfig,
    handleConfig,
  }
}
