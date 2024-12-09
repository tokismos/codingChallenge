import { getAdditionalConfig } from "@/api"
import { useQuery } from "@tanstack/react-query"

export const useGetAdditionalConfig = ({ configId }: { configId: string }) => {
  const query = useQuery({
    queryKey: ["getAdditionalConfig", configId],
    queryFn: () => getAdditionalConfig({ configId }),
    enabled: !!configId,
    select: (data) => data?.seatingOptions,
  })

  return {
    ...query,
    additionalConfig: query.data,
  }
}
