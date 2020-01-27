type Props = {
  children?: any,
}

export default function PageHeaderText(props: Props) {
  return (
    <h1 className="text-5xl font-bold">
      {props.children}
    </h1>
  )
}
