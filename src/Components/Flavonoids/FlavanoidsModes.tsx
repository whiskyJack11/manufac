import { useState } from "react";
import { useEffect } from "react"
import { calculateMode } from "../../Utils/utilityFunctions";

export const FlavanoidsModes: React.FC<any> = (props) => {
    const {data} = props;
    const [classifiedModes, setClassifiedModes] = useState<any>({});

    useEffect(() => {
        setClassifiedModes(calculateMode(data, 'Flavanoids'))
    }, [data])

    return (
        <tr>
            <th>Flavanoids Modes</th>
                <td>{classifiedModes[1]}</td>
                <td>{classifiedModes[2]}</td>
                <td>{classifiedModes[3]?.map((item: any, index: number) => <div key={index}>{item},</div>)}</td>
        </tr>
    )
}