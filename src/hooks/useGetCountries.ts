import { useCallback, useState } from 'react';

//services
import { getCountries } from '../services/countries';

export const useGetCountries = () => {
  const [countries, setCountries] = useState([]);
  const handleGetCountries = useCallback(async () => {
    const response = await getCountries();
    if (response) {
      const parsedResponse = await response.json();
      setCountries(parsedResponse);
    }
  }, []);

  return { countries, handleGetCountries };
};
