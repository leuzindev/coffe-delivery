import { IconType } from 'react-icons'

interface IconLabelProps {
  icon: IconType | any
  title: string
  subtitle: string
}

export function IconLabel({ icon, title, subtitle }: IconLabelProps) {
  return (
    <div className="mb-8 flex gap-2">
      {icon}
      <div>
        <h3 className="text-text-m text-base-subtitle">{title}</h3>
        <span className="text-text-s text-base-text">{subtitle}</span>
      </div>
    </div>
  )
}
