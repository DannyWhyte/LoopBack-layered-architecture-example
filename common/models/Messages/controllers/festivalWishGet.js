const festServcieClass = require('../services/festivalWish').FestivalWish

const wishFest = async input => {
    const festServcie = new festServcieClass()
    let response = ''
    switch(input) {
        case '1':
            response = await festServcie.eid()
            break;
        case '2':
            response = await festServcie.diwali()
            break;
        case '3':
            response = await festServcie.christmas()
            break;
        case '4':
            response = await festServcie.newYear()
            break;
        default:
            response = 'No Such Festival Found In System'
        }   
        return response
}

module.exports = { wishFest }
