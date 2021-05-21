const { onlyNumbers } = require('./lib/helpers')

const time = (timeInput) => {
   const trimmedTime = onlyNumbers(timeInput).replace(/^0+(?!$)/, '')
 
   switch (trimmedTime.length) {
     case 0:
       return ``
     case 1:
       return `0h0${trimmedTime}m`
     case 2:
       return `0h${trimmedTime}m`
     case 3:
     case 4:
     default:
       const regex = new RegExp('(\\d{' + (trimmedTime.length - 2) + '})(\\d{2})')
       const hours = trimmedTime.replace(regex, '$1')
       const minutes = trimmedTime.replace(regex, '$2')
       return `${hours}h${minutes}m`
   }
}

module.exports.time = time