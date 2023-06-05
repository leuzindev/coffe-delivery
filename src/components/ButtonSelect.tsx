import { IconType } from 'react-icons'

interface ButtonSelectProps {
  icon: IconType | any
  label: string
}

export function ButtonSelect({ icon, label }: ButtonSelectProps) {
  return (
    <button className="flex h-[51px] w-[190px] items-center justify-center gap-3 rounded-md bg-base-button transition-colors hover:bg-base-hover focus:border-2 focus:border-purple focus:bg-purple-light sm:w-full">
      {icon}{' '}
      <span className="text-button-m font-light">
        {label.toLocaleUpperCase()}
      </span>
    </button>
  )
}
