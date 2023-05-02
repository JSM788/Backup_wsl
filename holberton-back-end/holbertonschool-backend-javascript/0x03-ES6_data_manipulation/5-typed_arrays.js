export default function createInt8TypedArray(len, position, value) {
  if (position >= len) throw new Error('Position outside range');
  const arraybuf = new ArrayBuffer(len);
  const dataView = new DataView(arraybuf);
  dataView.setUint8(position, value);
  return dataView;
}
