type PageHeaderSeparatorProps = {
  small?: boolean,
}

export default function PageHeaderSeparator(props: PageHeaderSeparatorProps) {
  if (props.small) {
    return <div className="bg-purple-800 mb-2 mx-auto h-1 min-h-full w-2/3 md:w-1/3" />
  }
  return <div className="bg-purple-800 m-4 mx-auto h-1 min-h-full w-5/6 lg:w-3/5" />
}
