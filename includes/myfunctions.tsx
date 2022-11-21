import data from '../assets/json/data.json';
import {JsonDataSets} from './types';
export const getJsonData = ()=>{
    return new Promise<JsonDataSets>((resolve,reject)=>{
        const respondData:JsonDataSets = data;
        resolve(respondData);
    })
}