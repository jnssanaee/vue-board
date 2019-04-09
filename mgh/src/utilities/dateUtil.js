function splitTimestamp(timestamp) {
  const year = timestamp.substring(0, 4).substring(2, 4)
  const month = timestamp.substring(4, 6)
  const day = timestamp.substring(6, 8)
  const hour = timestamp.substring(8, 10)
  const minutes = timestamp.substring(10, 12)

  return year + '.' + month + '.' + day + ' ' + hour + ':' + minutes
}

function splitTodayDateObject() {
  let today = new Date();

  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const hour = today.getHours()
  const minutes = today.getMinutes()

  return year + '.' + month + '.' + day + ' ' + hour + ':' + minutes
}

export default {
  methods : {
    makeFormattedTime(timestamp) {
      return timestamp ? splitTimestamp(timestamp) : splitTodayDateObject()
    },
  }
}