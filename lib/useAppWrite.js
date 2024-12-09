import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppWrite = (fn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fn();
      setData(result);
    } catch (error) {
      console.log(error);
      Alert.alert("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const refetch = () => fetchData();

  return { data, loading, refetch };
};
export default useAppWrite;
