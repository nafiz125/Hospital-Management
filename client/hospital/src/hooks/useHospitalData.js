import { useEffect, useState } from "react";
import api from "../services/api";

export default function useHospitalData(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        const response = await api.get(endpoint);
        if (active) setData(response.data);
      } catch {
        if (active) setError("Could not load data from the server.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadData();

    return () => {
      active = false;
    };
  }, [endpoint]);

  return { data, setData, loading, error };
}