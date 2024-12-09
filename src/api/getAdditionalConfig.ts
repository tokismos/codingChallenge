import axios from "axios"
import { FetchDataResponse } from "@/types"
import { mockApiResponse } from "@/mockData"

export const getAdditionalConfig = async ({
  configId,
}: {
  configId: string
}) => {
  // const response = await axios.get<FetchDataResponse>(
  //   `/api/configuration/${configId}`
  // )

  return new Promise<FetchDataResponse>((resolve, reject) => {
    console.log("Additional Config Fetched !")
    resolve(mockApiResponse)
  })
}
