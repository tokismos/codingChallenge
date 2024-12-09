export const mockConfiguratorData = {
  collectionTitle: "Modern Living Collection",
  seating: {
    option1OptionsCollection: [
      { value: "gray" },
      { value: "beige" },
      { value: "navy" },
    ],
    sofa: {
      option2OptionsCollection: ["2-seater", "3-seater", "sectional"],
    },
  },
  price: {
    value: 1299,
  },
  colorsData: [
    { value: "gray", title: "Cloudy Gray" },
    { value: "beige", title: "Warm Beige" },
    { value: "navy", title: "Deep Navy" },
  ],
  configId: "sofa-mod-2024",
}

export const mockApiResponse = {
  seatingOptions: [
    { value: "2-seater", title: "2-Seater Sofa" },
    { value: "3-seater", title: "3-Seater Sofa" },
    { value: "sectional", title: "Sectional Sofa" },
  ],
}
