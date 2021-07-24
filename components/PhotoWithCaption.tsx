import Image from "next/image";

type Props = {
  children?: any;
  src: string;
  alt: string;
  width: string;
  height: string;
};

export default function PhotoWithCaption(props: Props) {
  return (
    <div className="border border-gray-200 p-4">
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <p className="pt-4">{props.alt}</p>
      {props.children}
    </div>
  );
}
