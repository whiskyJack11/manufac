export const calculateMean = (data: any, property: string) => {
    const classifiedMeans: any = {};
    for (const key in data) {
        const array = data[key];
        const sum = array.reduce((acc: any, item: any) => acc + +item[property], 0);
        console.log(sum);
        const mean = sum / array.length;
        classifiedMeans[key] = mean.toFixed(3);   
    }
    return classifiedMeans;
};

export const calculateMedian = (data: any, property: string) => {
    const classifiedMedians: any = {};
    for (const key in data) {
        const array = data[key];
    
        const sortedNumbers = array.slice().sort((a: any, b: any) => +a[property] - +b[property]);
        const middleIndex = Math.floor(+sortedNumbers.length / 2);

        if (sortedNumbers.length % 2 === 0) {
            const medianValue = +(+sortedNumbers[middleIndex - 1][property] + +sortedNumbers[middleIndex][property]) / 2;
            classifiedMedians[key] = +medianValue.toFixed(3);
        } else {
            classifiedMedians[key] = +sortedNumbers[middleIndex][property].toFixed(3);
        }
    }
    return classifiedMedians;

};

export const calculateMode = (data: any, property: string) => {
    const  classifiedModes: any = {};
    // const property = 'Flavanoids';
    for (const key in data) {
        const frequency: any = {};
        let maxFrequency: any = 0;
        let mode: any = []; 
        data[key].forEach((item: any) => {
            const value = +item[property];
            frequency[value] = +(frequency[value] || 0) + 1;
            if (frequency[value] > +maxFrequency) {
                maxFrequency = +frequency[value];
                mode = [value.toFixed(3)];
            } else if (frequency[value] === maxFrequency) {
                mode.push(value.toFixed(3));
            }
        });
        classifiedModes[key] = mode;
    }
    console.log(classifiedModes);
    return classifiedModes;
};