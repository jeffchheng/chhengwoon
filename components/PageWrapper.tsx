import { PresentationalTypes } from "./PresentationalTypes"

export default function PageWrapper({
  className = "",
  children,
}: PresentationalTypes) {
  return (
    <div className="mx-10 mb-8">
      <div className={`max-w-4xl mx-auto ${className}`}>
        {children}
      </div>
    </div>
  )
}
