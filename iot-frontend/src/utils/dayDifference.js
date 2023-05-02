import { DateTime } from 'luxon'

export const dayDifference = (from,to) =>{
    const start = DateTime.fromISO(from)
    const end = DateTime.fromISO(to)
    const { values } = end.diff(start,'days')
    return values.days
}