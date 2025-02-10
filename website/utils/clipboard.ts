export const copyToClipboard = async (text: string) => {
    return await navigator.clipboard.writeText(text);
};
