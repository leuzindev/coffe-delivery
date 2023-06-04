interface CoffeTagProps {
  type: string
}

export function CoffeTag({ type }: CoffeTagProps) {
  return (
    <div className="mt-3 flex items-center rounded-full bg-yellow-light p-[5px] text-tag text-yellow-dark">
      <span>{type.toUpperCase()}</span>
    </div>
  )
}
