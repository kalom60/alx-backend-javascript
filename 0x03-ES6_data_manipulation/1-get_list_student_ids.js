const getListStudentIds = (array) => {
  if (array instanceof Array) {
    return array.map((arr) => arr.id);
  }
  return [];
};

export default getListStudentIds;
