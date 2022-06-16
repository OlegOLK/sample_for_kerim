import { useEffect, useState } from "react";
import { Data } from "../../types/data";

export function useData() {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        async function fetchData() {
            var response = await fetch("http://localhost:5263/api/data");
            var json: Data[] = await response.json();
            setData(json);
        }
        fetchData();
    }, [])

    return data;
}