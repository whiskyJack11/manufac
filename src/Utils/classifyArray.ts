import data from "../constants/dataSet";

export const classifyArray = () => {
    const classified: any = {};
    data?.forEach(item => {
        const key = item['Alcohol'];
        
        if (!classified[key]) {
            classified[key] = [];
        }
        
        classified[key].push(item);
    });
    return classified;
}

export const classifyArrayWithGamma = () => {
    const classifiedData = classifyArray();
    for(const key in classifiedData) {
        classifiedData[key].forEach((item: any) => {
            item['Gamma'] = +((item['Ash'] * item['Hue']) / item['Magnesium']).toFixed(3);
        });
    }
    console.log(classifiedData);
    return classifiedData
}