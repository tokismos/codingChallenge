export interface SeatingConfiguratorProps {
  collectionTitle: string
  seating: {
    option1OptionsCollection: Array<{ value: string }>
    sofa: {
      option2OptionsCollection: Array<any>
    }
  }
  price: {
    value: number
  }
  colorsData: Array<{ value: string; title: string }>
  configId: string
}
