import useSWR from "swr"
import { BASE_URL, fetcher } from "./utils"

export const usePlanetsById = (id: string) => {
  const { data, error } = useSWR(`${BASE_URL}/${id}`, fetcher)

  return {
    planet: data,
  }
}