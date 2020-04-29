import { MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler;
  children?: any;
};

export default function Button(props: Props) {
  return (
    <button
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 mt-4 lg:mt-0"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
