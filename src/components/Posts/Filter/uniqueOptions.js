import * as users from '../../../data/users.json'

export function uniqueOptions(object, data) {
    const allCityes = users.map(user => {
        return user[object][data]
    })

    const uniqueCityes = allCityes.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    })

    return uniqueCityes
}