export function getItem(itemName) {
  try {
    return JSON.parse(localStorage.getItem(itemName));
  } catch (e) {}
}

export function setItem(itemName, itemValue) {
  try {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  } catch (e) {}
}
