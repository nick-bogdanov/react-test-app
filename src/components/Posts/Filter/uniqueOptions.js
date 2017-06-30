export function uniqueOptions(users, object, data) {
    const allCityes = users.map(user => {
        return user[object][data]
    })

    const uniqueCityes = allCityes.filter(function (elem, index, self) {
        return index == self.indexOf(elem);
    })

    return uniqueCityes
}