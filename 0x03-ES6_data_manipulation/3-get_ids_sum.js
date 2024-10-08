export default function getStudentIdsSum(idsToSum) {
  const c = 0;
  const mapIds = idsToSum.map((a) => a.id);
  const sumIds = mapIds.reduce((a, b) => a + b, c);
  return sumIds;
}
