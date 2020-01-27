import { ReactChildren } from "react"

type Props = {
  children?: ReactChildren
  src: string,
  alt: string,
}

export default function PhotoWithCaption(props: Props) {
  return (
    <div className="border border-gray-200 p-4">
      <img src={props.src} alt={props.alt}/>
      <p className="pt-4">{props.alt}</p>
      {props.children}
    </div>
  )
}
