import React, { useEffect} from 'react';
import { classifyArray, classifyArrayWithGamma } from './Utils/classifyArray';
import Flavonoids from './Components/Flavonoids/Flavonoids';
import { useState } from 'react';
import Gammas from './Components/Gammas/Gammas';

function App() {
  const [classifiedData, setClassifiedData] = useState({});
  const [classifiedDataWithGamma, setClassifiedDataWithGamma] = useState({});

  useEffect(() => {
    setClassifiedData(classifyArray());
    setClassifiedDataWithGamma(classifyArrayWithGamma())
  }, []);

  return (
    <div className="App">
     <Flavonoids data={classifiedData}/>
     <Gammas data={classifiedDataWithGamma}/>
    </div>
  );
}

export default App;
