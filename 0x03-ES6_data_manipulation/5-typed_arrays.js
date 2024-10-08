export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  let view = new DataView(buffer);

  view.setInt8(position, value);

  if (view.getInt8(position) !== value) {
    throw new Error('Position outside range');
  }
  return view;
}
