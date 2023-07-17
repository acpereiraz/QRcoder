export default function Input({urlRef}) {
    return(
        <input ref={urlRef} type="url" placeholder="URL here..." className="h-fit ring-2 ring-gray-200 rounded-lg px-4 py-1 text-lg w-full"/>
    );
}