export function readableDate(date: Date | undefined): string {
    if (!date) {
        return 'undefined'
    }
    return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(date)
}