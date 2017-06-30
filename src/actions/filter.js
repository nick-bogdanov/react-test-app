import { FILTER_BY_CITY, FILTER_BY_COMPANY } from '../constants'

export function filterByCity(filter) {
    return {
        type: FILTER_BY_CITY,
        filter
    }
}

export function filterByCompany(data) {
    return {
        type: FILTER_BY_COMPANY,
        data
    }
}