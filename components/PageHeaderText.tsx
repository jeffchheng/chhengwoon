import { PresentationalTypes } from "./PresentationalTypes"

export default function PageHeaderText({
  className = "",
  children,
}: PresentationalTypes) {
  return (
    <h1 className={`py-8 text-5xl font-bold ${className}`}>
      {children}
    </h1>
  )
}
