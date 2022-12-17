import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  // if no results available pass in empty array
  return [results?.data?.breeds ?? [], results.status];
}
