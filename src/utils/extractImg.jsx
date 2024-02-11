// Função para extrair a URL da primeira imagem do conteúdo
export function extractFirstImage(content) {
    const regex = /<img.*?src="(.*?)"/;
    const match = content.match(regex);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}