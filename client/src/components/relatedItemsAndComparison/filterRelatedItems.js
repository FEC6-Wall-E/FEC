module.exports = (relatedList, pid) => {
  const filteredList = [...new Set(relatedList)];
  if (filteredList.includes(pid)) {
    filteredList.splice(filteredList.indexOf(pid), 1);
  }
  return filteredList;
};
