const Priority = ({ priorityName }) => {
  let style;
  if (priorityName === "Urgent") {
    style = "bg-red-600";
  } else if (priorityName === "Regular") {
    style = "bg-yellow-600";
  } else {
    style = "bg-blue-600";
  }
  const classes =
    "w-14 sm:w-20 h-8 leading-8 text-sm text-center rounded-md text-white";
  const newClasses = classes.concat(" " + style);
  return <span className={newClasses}>{priorityName}</span>;
};

export default Priority;
