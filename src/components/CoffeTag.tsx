interface CoffeTagProps {
  type: string
}

export function CoffeTag({ type }: CoffeTagProps) {
  return <div className="text-tag text-yellow-dark">{type.toUpperCase()}</div>
}
