import { cookies } from "next/headers"

export const cookieStorageProvider = {
  getItem: (key) => {
    cookies().get(key)?.value
  },
  setItem: (key, value) => {
    cookies().set(key, value)
  },
  removeItem: (key) => {
    cookies().set(key, "")
  },
}
