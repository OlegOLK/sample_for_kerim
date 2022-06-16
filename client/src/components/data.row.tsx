import { Data } from '../../types/data'
import { useNavigate } from "react-router-dom";

type Props = {
    data: Data
}

export function DataRow({ data }: Props) {
    let navigate = useNavigate();

    const goToDetails = () => {
        navigate(`/details/${data.id}`);
    }
    return (
        <div onClick={goToDetails} style={{ backgroundColor: '#dfdfdf' }}>
            <h2>{data.header}</h2>
        </div>
    )
}