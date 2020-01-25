import { PresentationalTypes } from "./PresentationalTypes"

export default function PageHeader({
  className = "",
  children,
}: PresentationalTypes) {
  return (
    <h1 className={`text-5xl py-8 font-bold ${className}`}>
      {children}
    </h1>
  )
}
