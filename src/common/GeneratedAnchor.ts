/**
 * Convert text for use in an id="text" anchor.
 */
export function anchorText(text: string): string {
    return text.toLowerCase()
        .replace(/[^a-z0-9\- ]/g, '')
        .replace(/[ ]/g, '-');
}
