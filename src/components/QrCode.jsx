export default function QrCode({imageUrl}) {
    return(
        <img src={imageUrl} alt="" className="h-[40%] md:h-[50%] aspect-square max-h-1/2 max-w-1/2 ring ring-8 rounded-lg p-2 shadow-xl" />
    );
}