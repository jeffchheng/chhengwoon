type Props = {
  children?: any,
}

export default function SectionText(props: Props) {
  return (
    <p className="py-3">
      {props.children}
    </p>
  )
}
