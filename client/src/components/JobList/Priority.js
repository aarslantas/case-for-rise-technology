const Priority = ({ name }) => {
  let style;
  if (name === "Urgent") {
    style = "bg-red-600";
  } else if (name === "Regular") {
    style = "bg-yellow-600";
  } else {
    style = "bg-blue-600";
  }
  const classes =
    "w-20 h-8 leading-8 text-sm text-center rounded-md text-white shadow-md";
  const newClasses = classes.concat(" " + style);
  return <span className={newClasses}>{name}</span>;
};

export default Priority;
