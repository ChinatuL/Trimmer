type FormRowProps = {
    labelText: string;
    type: string;
    name: string;
    placeholder: string;
};

export default function FormRow({
    labelText,
    type,
    name,
    placeholder,
}: FormRowProps) {
    return (
        <div className=''>
            {/* visually hide label for accessibility */}
            <label htmlFor={name} className='sr-only'>
                {labelText}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
              className='bg-[#0B0A1E] border border-zinc-50 rounded-xl w-full px-4 py-3'
            />
            {/* add reveal button if input type is password */}
            {type === "password" && <button>reveal</button>}
        </div>
    );
}
