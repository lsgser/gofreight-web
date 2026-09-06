/** True when running on macOS (shows ⌘K instead of Ctrl+K). */
export function isMacPlatform(): boolean {
  if (typeof navigator === 'undefined') return false
  return /Mac|iPhone|iPod|iPad/i.test(navigator.userAgent)
}

export function searchShortcutLabel(): string {
  return isMacPlatform() ? '⌘K' : 'Ctrl+K'
}
