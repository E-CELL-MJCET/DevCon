import axios from "axios";
import React, { useEffect, useState } from "react";

const StackSelector = () => {
  const [user, setUser] = useState();
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://newsdata.io/api/1/news?apikey=pub_36832033657d852b8d7574d9be014249d0c5f&q=TECH&language=en&category=education,technology ",
          {
            signal: abortController.signal,
          }
        );

        if (response.status === 200) {
          setUser(response.data.data);
          setIsLoading(false);

          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log("Data fetching cancelled");
        } else {
          setIsLoading(false);
        }
      }
    };

    fetchUsers();

    return () => abortController.abort("Data fetching cancelled");
  }, []);
};

export default StackSelector;
