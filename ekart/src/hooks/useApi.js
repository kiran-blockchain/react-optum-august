import axios from "axios";
import { useEffect, useState } from "react";

export const useApiGet = (url) => {
    const [result, setResult] = useState({ status: '400', data: [] });
  
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                setResult({ status: 200, data: response.data })
            }
            catch (ex) {
                setResult({ status: 400, data: [] })
            }
        }
        getData();
    }, []);
    return result;
};

export const useApiPost = (url, payload) => {
    const [result, setResult] = useState({ status: '400', data: '' })
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post(url, payload);
                setResult({ status: 200, data: response.data })
            }
            catch (ex) {
                setResult({ status: 400, data: '' })
            }
        }
        getData();
    }, []);
    return result;
};
