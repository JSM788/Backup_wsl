import { DateTime } from 'luxon'

const todayDate = DateTime.local().setZone("America/Lima")

export const today = todayDate.toISODate()

export const fifteenAgo = todayDate.minus({day:15}).toISODate()

export const thirtyAgo = todayDate.minus({day:30}).toISODate()