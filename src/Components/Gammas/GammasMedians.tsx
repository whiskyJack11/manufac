import React, { useEffect } from "react"
import { useState } from "react"
import { calculateMedian } from "../../Utils/utilityFunctions";

const GammasMedians = (props: any) => {
    const {data} = props;
    const [classifiedMedians, setClassifiedMedians] = useState<any>({})

    useEffect(() => {
        setClassifiedMedians(calculateMedian(data, 'Gamma'))
    },[data])

    return (
        <tr>
            <th>Gammas Medians</th>
            {
                Object.keys(classifiedMedians).map((key, index) => {
                    return (
                        <td key={index}>{classifiedMedians[key]}</td>
                    )
                })
            }
        </tr>
    )
};
export default GammasMedians;