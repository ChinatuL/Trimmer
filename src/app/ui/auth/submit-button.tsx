export default function SubmitButton({ text }: { text: string }) {
    return (
        <button className='bg-purple w-full py-3 rounded-lg transition duration-300 ease-in-out hover:opacity-70'>
            {text}
        </button>
    );
}
