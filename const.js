const user = {
    name: 'jancarlos',
    lastname: 'sanchez',
    age: 59,
    address: {
        country: 'republica dominicana',
        city: 'santo domingo',
        street: 'calle san miguel'
    },
    friends: ['adrian', 'dario'],
    active: true,
    sendmail() {
        return 'sending mail...'
    }
}

console.log(user.address.city)

const name = 'laptop'
const price = 1000

const newproduct = {
    name,
    price,
}

console.log(newproduct)