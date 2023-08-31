import { useState } from "react";
import { useEffect } from "react";
import { calculateMean } from "../../Utils/utilityFunctions";

const GammasMeans = (props: any) => {
    const {data} = props;
    const [classifiedMeans, setClassifiedMeans] = useState<any>({});

    useEffect(() => {
        setClassifiedMeans(calculateMean(data, 'Gamma'))
    }, [data])

    return (
        <tr>
            <th>Gammas Means</th>
            {
                Object.keys(classifiedMeans).map((key, index) => {
                    return (
                        <td key={index}>{classifiedMeans[key]}</td>
                    )
                })
            }
        </tr>
    )
};
export default GammasMeans;