import { PresentationalTypes } from "./PresentationalTypes"

export default function SectionText({
  className = "",
  children,
}: PresentationalTypes) {
  return (
    <p className={`py-3 ${className}`}>
      {children}
    </p>
  )
}
