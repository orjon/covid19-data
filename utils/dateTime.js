const appendZero = (value) => ('0' + value).slice(-2)

const dateTime = () => {
  const dateObj = new Date()
  const day = appendZero(dateObj.getDate())
  const month = appendZero(dateObj.getMonth() + 1)
  const hours = appendZero(dateObj.getHours())
  const mins = appendZero(dateObj.getMinutes())
  const secs = appendZero(dateObj.getSeconds())
  const time = `${hours}:${mins}:${secs}`
  const date = `${dateObj.getFullYear()}-${month}-${day}`
  return `[${date} ${time}]`
}

module.exports = { dateTime }
