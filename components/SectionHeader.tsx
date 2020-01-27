type Props = {
  textCenter?: boolean,
  children?: any,
}

export default function SectionHeader(props: Props) {
  return (
    <h3 className={`font-bold text-xl py-4 ${props.textCenter ? "text-center" : ""}`}>
      {props.children}
    </h3>
  )
}
