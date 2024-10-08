export default function getListStudentIds(args) {
  if (!Array.isArray(args)) {
    return [];
  }
  return args.map((a) => a.id);
}
