import { useQuery } from "@tanstack/react-query";
import { dictionaryService } from "./DictionaryService";

interface IGetDefinitionsProps {
  word: string;
}

export const useGetDefinitions = ({ word }: IGetDefinitionsProps) => {
  const response = useQuery({
    queryKey: ['definitions', word],
    queryFn: () => {
      return dictionaryService.getDefinitions(word);
    }
  }
  )

  return response;
}