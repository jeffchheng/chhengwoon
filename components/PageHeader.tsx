type Props = {
  children?: any,
}

export default function PageHeader(props: Props) {
  return (
    <div className="text-center py-4">
      {props.children}
    </div>
  )
}
