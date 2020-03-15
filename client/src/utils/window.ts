// TODO: handle serverside rendring logic, mock window or using jsDOM
export function getWindow(): Window {
  return window || {};
}

export function getDocument(): Document {
  return document || {};
}
