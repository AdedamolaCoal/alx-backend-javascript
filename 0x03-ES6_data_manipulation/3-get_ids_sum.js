export default function getStudentIdsSum(idsToSum) {
  const c = 0;
  // const mapIds = idsToSum.map((a) => a.id);
  // const sumIds = mapIds.reduce((a, b) => a + b, c);
  console.log('before reducer: ', idsToSum);
  const sumIds = idsToSum.reduce((a, b) => a + b.id, c);
  console.log('after reducer: ', sumIds);
  return sumIds;
}
