import { useState } from "react";
import { useEffect } from "react";
import { calculateMean } from "../../Utils/utilityFunctions";

const FlavanoidsMeans = (props: any) => {
    const {data} = props;
    const [classifiedMeans, setClassifiedMeans] = useState<any>({});

    useEffect(() => {
        setClassifiedMeans(calculateMean(data, 'Flavanoids'))
    }, [data])

    return (
        <tr>
            <th>Flavanoids Means</th>
            {
                Object.keys(classifiedMeans).map((key, index) => {
                    return (
                        <td key={index}>{classifiedMeans[key]}</td>
                    )
                })
            }
        </tr>
    )
}
export default FlavanoidsMeans;