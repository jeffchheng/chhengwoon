import { PresentationalTypes } from "./PresentationalTypes"

export default function SectionHeader({
  className = "",
  children,
}: PresentationalTypes) {
  return (
    <h3 className={`font-bold text-xl py-4 ${className}`}>
      {children}
    </h3>
  )
}
