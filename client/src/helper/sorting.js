export const sortBy = (field) => {
  return function (a, b) {
    return (a[field] > b[field]) - (a[field] < b[field]);
  };
};

export const sortFromUrgentToTrival = (jobs) =>
  jobs.sort((a, b) => {
    if (a.priorityNumber > b.priorityNumber) return 1;
    if (b.priorityNumber > a.priorityNumber) return -1;
    return 0;
  });

export const sortFromTrivalToUrgent = (jobs) =>
  jobs.sort((a, b) => {
    if (a.priorityNumber > b.priorityNumber) return -1;
    if (b.priorityNumber > a.priorityNumber) return 1;
    return 0;
  });
