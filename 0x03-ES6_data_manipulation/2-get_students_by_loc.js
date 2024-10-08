export default function getStudentsByLocation(arrObj, city) {
  const filterCity = arrObj.filter((arr) => arr.location === city);
  return filterCity;
}
