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
export const apiPost = async (url,payload) => {
    try {
        const response = await axios.post(url, payload);
       return {status:200,result:response.data};
    }
    catch (ex) {
        return{ status: 400, data: '' };
    }
}
export const apiGet = async (url) => {
    try {
        const response = await axios.get(url);
       return {status:200,result:response.data};
    }
    catch (ex) {
        return{ status: 400, data: '' };
    }
}