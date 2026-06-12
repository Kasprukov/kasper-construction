// Recursively resolves bilingual nodes for the active language.
// A "locale leaf" is an object shaped like { uk: '…', en: '…' }; everything
// else (plain strings, numbers, slugs, image paths) passes through untouched.
export function localize(node, lang) {
  if (node == null) return node
  if (Array.isArray(node)) return node.map((n) => localize(n, lang))
  if (typeof node === 'object') {
    const keys = Object.keys(node)
    // A locale leaf has only uk/en keys (values may be strings or arrays).
    if (keys.length > 0 && keys.length <= 2 && 'uk' in node && 'en' in node) {
      return node[lang] ?? node.uk
    }
    const out = {}
    for (const k of keys) out[k] = localize(node[k], lang)
    return out
  }
  return node
}
