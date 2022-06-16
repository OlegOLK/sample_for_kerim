import { Data } from './../types/data'
import { useData } from './hooks/data.hook';
import { useParams } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { KerimAppBar } from './components/app.bar';

type Props = {
    data: Data
}

export function Detail() {
    let params = useParams();
    const dataList: Data[] = useData();
    const data = dataList.find(x => x.id == params.id);

    return (
        <div>
            <KerimAppBar />

            <h1>{data?.header}</h1>
            <Divider />
            <p>{data?.text}</p>
        </div>
    )
}