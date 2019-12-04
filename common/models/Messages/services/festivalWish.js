const q = require('q')

class FestivalWish {
    eid () {
        let defer = q.defer()
        defer.resolve('Wish u a happy Eid')
        return defer.promise
    }

    diwali () {
        let defer = q.defer()
        defer.resolve('Wish u a happy Diwali')
        return defer.promise
    }

    christmas () {
        let defer = q.defer()
        defer.resolve('Wish u a happy Christmas')
        return defer.promise
    }

    newYear () {
        let defer = q.defer()
        defer.resolve('Wish u a happy New Year')
        return defer.promise
    }
}

module.exports = {FestivalWish}