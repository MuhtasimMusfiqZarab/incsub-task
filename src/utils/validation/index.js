

export function isValidString(text) {
  return !!(text && text.replace(/\s/g, '') !== '');
}


