export type Seating = {
  option1OptionsCollection: Array<{ value: string }>
  sofa: {
    option2OptionsCollection: Array<any>
  }
}

export type CartOptions = {
  color: string
  seating: string
}

export interface ConfigSelectionData {
  color: string
  seating: string
}

export interface FetchDataResponse {
  seatingOptions: { value: string; title: string }[]
}
