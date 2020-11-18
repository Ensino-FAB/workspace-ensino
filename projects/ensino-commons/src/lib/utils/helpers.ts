export function handleToastScreenTime(messageLength: number): number {
  return Math.min(Math.max(messageLength * 55, 3000), 7000);
}
