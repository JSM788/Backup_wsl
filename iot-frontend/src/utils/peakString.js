import { DateTime } from "luxon"
import { getWeekDay } from "./getDay"

const articleDictionary = {
    Temperatura: 'la',
    Humedad: 'la'
}

export const peakCorrector = ( indicator ) => (indicator==='Temperatura' || indicator==='Humedad') ? indicator.toLowerCase() : indicator

const indicatorString = (indicator) => articleDictionary[indicator] || 'el'

export const peakString = (status, peaks, article, unit, indicator) => {

    const start = `El ${getWeekDay(DateTime.fromISO(peaks.created_at?.[status]).weekday).toLowerCase()} ${DateTime.fromISO(peaks.created_at?.[status]).day} ${indicatorString(indicator)} ${peakCorrector(indicator)} alcanzó`

    // const end = `de ${+Number(peaks.value?.[status]).toFixed(2)}`

    const total = peaks.created_at?.[status] && [start]

    return total
}