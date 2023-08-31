import React, {useState, useEffect} from "react";
import { calculateMode } from "../../Utils/utilityFunctions";
const GammasModes = (props: any) => {
    const {data} = props;
    const [classifiedModes, setClassifiedModes] = useState<any>({});

    useEffect(() => {
        setClassifiedModes(calculateMode(data, 'Gamma'))
    }, [data])

    return (
        <tr>
            <th>Gammas Modes</th>
                <td>{classifiedModes[1]}</td>
                <td>{classifiedModes[2]}</td>
                <td>{classifiedModes[3]?.map((item: any, index: number) => <div key={index}>{item},</div>)}</td>
        </tr>
    )
};
export default GammasModes;