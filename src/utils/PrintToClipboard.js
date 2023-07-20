import html2canvas from "html2canvas";

export default async function PrintToClipboard(divRef){
    const divCanvas = await html2canvas(divRef.current);
    const divBlob = await new Promise(resolve => divCanvas.toBlob(resolve, "image/png"))

    try {
        const data = [new ClipboardItem({"image/png": divBlob})];
        await navigator.clipboard.write(data);
        console.log('Image copied!');
    }catch(err){
        console.error("Ocurred an error while trying to print and share the QR code! Output: "+err);
    }
}