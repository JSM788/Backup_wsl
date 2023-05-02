import { peakString } from "../utils/peakString"

const usePeaks = (article, peaks, unit, indicator) =>{

    const peakDictionary = {
        Temperatura: {
            val: ['HIGH','NORMAL'],
            string: ['alto','bajo']
        },
        Humedad: {
            val: ['HIGH','NORMAL'],
            string: ['alto','bajo']
        }
    }

    const peakReturner = (indicator) => peakDictionary[indicator] || {
        val: ['HIGH','NORMAL'],
        string: ['malo','regular']
    }

    const { val, string } = peakReturner(indicator)

    const peakValues = val.map((status,index)=> peakString(status, peaks, article, unit, indicator)!==undefined && [peakString(status, peaks, article, unit, indicator), `${+Number(peaks.value?.[status]).toFixed(2)} ${unit}`, string[index]])

    return {
        peakValues
    }
}

export default usePeaks