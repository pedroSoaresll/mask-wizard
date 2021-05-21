const onlyNumbers = (str) => String(str).replace(/\D/g, '')

const noLeadingZero = (nmb) => String(nmb).replace(/^0+(?!$)/, '')

module.exports.onlyNumbers = onlyNumbers

module.exports.noLeadingZero = noLeadingZero