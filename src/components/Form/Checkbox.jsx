export default function Checkbox({ children, ...rest }) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span> {children} </span>
    </label>
  );
}
