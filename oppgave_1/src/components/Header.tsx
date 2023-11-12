import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function Header(props: { title: number}) {

 
  return <h1 className="flex flex-col justify-center items-center mb-10">Oppgave {props.title}</h1>
}
