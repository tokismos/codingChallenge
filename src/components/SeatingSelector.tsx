import React from "react"

interface SeatingSelectorProps {
  selectedSeating: string
  onSelect: (config: { seating: string }) => void
  additionalConfig: {
    value: string
    title: string
  }[]
}
export const SeatingSelector = ({
  selectedSeating,
  onSelect,
  additionalConfig,
}: SeatingSelectorProps) => {
  return (
    <div>
      <label>Select Seating Option</label>
      <select
        value={selectedSeating || ""}
        onChange={(e) => onSelect({ seating: e.target.value })}
      >
        {additionalConfig?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}
