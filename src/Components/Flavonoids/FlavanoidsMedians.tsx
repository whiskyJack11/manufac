import React, { useEffect } from "react"
import { useState } from "react"
import { calculateMedian } from "../../Utils/utilityFunctions"

interface Idata {
    "1": number[],
    "2": number[],
    "3": number[] 
}
interface Iprops {
    data: Idata
}


export const FlavanoidsMedians: React.FC<Iprops> = (props) => {
    const {data} = props;
    const [classifiedMedians, setClassifiedMedians] = useState<any>({})

    useEffect(() => {
        setClassifiedMedians(calculateMedian(data, 'Flavanoids'))
    },[data])

    return (
        <tr>
            <th>Flavanoids Medians</th>
            {
                Object.keys(classifiedMedians).map((key, index) => {
                    return (
                        <td key={index}>{classifiedMedians[key]}</td>
                    )
                })
            }
        </tr>
    )
}