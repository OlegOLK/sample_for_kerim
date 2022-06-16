import { Data } from './../types/data'
import { useData } from './hooks/data.hook';
import { useParams } from "react-router-dom";
type Props = {
    data: Data
}

export function Detail() {
    let params = useParams();
    const dataList: Data[] = useData();
    const data = dataList.find(x => x.id == params.id);
    
    return (
        <div style={{ backgroundColor: '#dfdfdf' }}>
            Detail
            <h1>{data?.header}</h1>
            <h3>{data?.text}</h3>
        </div>
    )
}