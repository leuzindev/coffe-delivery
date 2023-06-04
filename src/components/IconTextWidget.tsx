import React from 'react'
import { IconType } from 'react-icons'

interface IconTextWidgetProps {
  icon: IconType | any
  title: React.ReactNode
  color: string
  subtitle?: string
}

export function IconTextWidget({
  icon,
  title,
  subtitle,
  color,
}: IconTextWidgetProps) {
  return (
    <div className="flex h-10 gap-3">
      <div className="flex items-center justify-center">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full ${color}`}
        >
          {icon}
        </div>
      </div>
      <div className="co flex items-center justify-center">
        <span className="text-text-m text-base-text">{title}</span>
        <span>{subtitle}</span>
      </div>
    </div>
  )
}
