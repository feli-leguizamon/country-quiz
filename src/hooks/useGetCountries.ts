import { useCallback, useState } from 'react';

//services
import { getCountries } from '../services/countries';

export const useGetCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGetCountries = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCountries();
      if (response) {
        const parsedResponse = await response.json();
        setCountries(parsedResponse);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { countries, handleGetCountries, loading };
};
