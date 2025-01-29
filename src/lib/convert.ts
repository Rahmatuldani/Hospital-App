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

export function truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}