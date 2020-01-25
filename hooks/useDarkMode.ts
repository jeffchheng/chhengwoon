import useLocalStorage from "./useLocalStorage"

export default function useDarkMode() {
  return useLocalStorage("darkMode", false)
}
