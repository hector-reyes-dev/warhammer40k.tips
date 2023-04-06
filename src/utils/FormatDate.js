export const formatDate = (date) => {
	const event = new Date(date)
	return event.toDateString()
}

export const formatDateWithoutYear = (date) => {
	const event = new Date(date)
	return event.toDateString().slice(0, -4)
}
