interface CoffeTagProps {
  categorie: string
}

export function CoffeTag({ categorie }: CoffeTagProps) {
  return (
    <div className="mt-3 flex items-center rounded-full bg-yellow-light p-[5px] text-tag text-yellow-dark">
      <span>{categorie.toUpperCase()}</span>
    </div>
  )
}
