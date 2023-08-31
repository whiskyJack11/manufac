import { useEffect, useState } from "react";
import data from "../../constants/dataSet";
import { calculateMean, calculateMedian, calculateMode } from "../../Utils/utilityFunctions";
import FlavanoidsMeans from "./FlavanoidsMeans";
import { FlavanoidsMedians } from "./FlavanoidsMedians";
import { FlavanoidsModes } from "./FlavanoidsModes";
import './style.css'

const Flavonoids = (props: any) => {

    const {data} = props;

    useEffect(() => {
      
    }, [data])
    return (
      <>
      <h2>Flavanoids Statistics</h2>
        <table>
          <thead>
            <tr>
              <th>Measures</th>
              {Object.keys(data).map((key: any, index: number) => {
                return (
                  <th key={index}>{`Class ${key}`}</th>
                )
              })
              }
            </tr>
          </thead>
          <tbody>
            <FlavanoidsMeans data={data}/>
            <FlavanoidsMedians data={data} />
            <FlavanoidsModes data={data} />
          </tbody>
      </table>
    </>
  )
}
export default Flavonoids;