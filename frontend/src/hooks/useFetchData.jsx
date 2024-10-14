import { useEffect, useState } from "react";
import { fetchData, fetchTimeTrend } from "../api/api";

const useFetchData = (filters) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await fetchData(filters);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [filters]);

  return { data, loading, error };
};

export const useFetchTimeTrend = (feature, filters) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTimeTrend = async () => {
      setLoading(true);
      try {
        const response = await fetchTimeTrend(feature, filters);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadTimeTrend();
  }, [feature, filters]);

  return { data, loading, error };
};

export default useFetchData;
