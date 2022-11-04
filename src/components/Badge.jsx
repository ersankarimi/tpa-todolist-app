import classNames from "classnames";

export default function Badge({ children, isActive }) {
  return (
    <div
      className={classNames("rounded-lg px-4 text-slate-200", {
        "bg-slate-700/80": !isActive,
        "bg-indigo-700/80": isActive,
      })}
    >
      {children}
    </div>
  );
}
