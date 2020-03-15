export default function pluralizeReadingTime(time) {
  let roundedTime = Math.max(1, Math.round(time))
  return `${roundedTime} ${roundedTime > 1 ? "mins" : "min"} read`
}
