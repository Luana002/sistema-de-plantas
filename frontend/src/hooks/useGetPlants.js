import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../hooks/config'; 
function useGetPlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiBaseUrl = getApiBaseUrl();
    fetch(`${apiBaseUrl}/plants`) 
      .then((res) => res.json())
      .then((data) => {
       
        setPlants(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error('Erro ao buscar plantas:', err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { plants, loading, error };
}