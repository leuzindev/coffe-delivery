interface InputFormProps {
  type: string
  placeholder: string
  className?: string
}

export function InputForm({ type, placeholder, className }: InputFormProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} h-[42px] rounded border-2 bg-base-input p-3 placeholder:text-text-s focus:border-2 focus:border-yellow-dark xll:w-full`}
    />
  )
}
