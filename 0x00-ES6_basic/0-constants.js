export function taskFirst() {
  const firstStr = 'I prefer const when I can.';
  return firstStr;
}

export function taskNext() {
  let secStr = 'let is okay';
  secStr = `But sometimes ${secStr}`;
  return secStr;
}
