export function extractFirstImage(content) {
    const regex = /<img.*?src="(.*?)".*?\/>/;
    const match = content.match(regex);
    if (match && match[1]) {
        const imageUrl = match[1];
        const html = content.replace(match[0], '');
        return { imageUrl, html };
    }
    return { imageUrl: null, html: content };
}