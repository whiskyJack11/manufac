import { useEffect, useState } from "react";
import GammasMeans from "./GammasMeans";
import GammasMedians from "./GammasMedians";
import GammasModes from "./GammasModes";
import './style.css'
const Gammas = (props: any) => {
    const {data} = props;

    return (
        <>
      <h2>Gammas Statistics</h2>
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
              <GammasMeans data={data} />
              <GammasMedians data={data} />
              <GammasModes data={data} />
            {/* <FlavanoidsMeans data={data}/>
            <FlavanoidsMedians data={data} />
            <FlavanoidsModes data={data} /> */}
          </tbody>
      </table>
    </>
    )
};
export default Gammas;