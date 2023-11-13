
type TaskTextProps = {
  text: string;
};

export default function TaskText({ text }: TaskTextProps) {
  return <p className="text-sm text-slate-400">{text}</p>;
}

// export default function TaskText(props: { text: string }) {
//   const { text } = props
//   return <p className="text-sm text-slate-400">{text}</p>
// }
