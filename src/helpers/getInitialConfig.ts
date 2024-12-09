import { ConfigSelectionData, Seating } from "@/types"

export const getInitialConfig = (seating: Seating): ConfigSelectionData => {
  return {
    color: seating?.option1OptionsCollection[0]?.value || "",
    seating: seating?.sofa?.option2OptionsCollection[0] || "",
  }
}
