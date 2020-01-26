import { PresentationalTypes } from "./PresentationalTypes"

export default function PageWrapper({
  className = "",
  children,
}: PresentationalTypes) {
  return (
    <div className="mx-5">
      <div className={`max-w-3xl mx-auto ${className}`}>
        {children}
      </div>
    </div>
  )
}
