import { PresentationalTypes } from "./PresentationalTypes"

export default function PageHeader({
  className = "",
  children,
}: PresentationalTypes) {
  return (
    <div className={`text-center py-8${className}`}>
      {children}
    </div>
  )
}
