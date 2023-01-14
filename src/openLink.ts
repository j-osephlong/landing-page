export default function openLink (url: string) {
    if (url == undefined) return;
        window?.open(url, "_blank")?.focus();
}