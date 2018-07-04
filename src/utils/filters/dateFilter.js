import dayjs from 'dayjs'

// 将时间戳转换成 YYYY-MM-DD hh:mm:ss
export const timeStamp2Date = function(date, formatString = 'YYYY-MM-DD hh:mm:ss') {
  if (dayjs(date).isValid()) {
    return dayjs(date).format(formatString)
  }
  return ''
}

export const formatInEvaluation = (val, formatString = 'M月D日 YYYY') => {
  if (dayjs(val).isValid()) {
    return dayjs(val).format(formatString)
  }
  return '-'
}

export const formatInPeriod = (val, formatString = 'M月D日') => {
  if (dayjs(val).isValid()) {
    return dayjs(val).format(formatString)
  }
  return '-'
}
