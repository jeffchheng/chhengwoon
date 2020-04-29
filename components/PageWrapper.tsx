type Props = {
  children?: any;
};

export default function PageWrapper(props: Props) {
  return (
    <div className="mx-10 mb-8">
      <div className="max-w-4xl mx-auto">{props.children}</div>
    </div>
  );
}
