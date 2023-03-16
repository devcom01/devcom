import { create } from 'zustand'

export const userContext = create((set) => ({
  user: {},
  userData: {},
  userLoggedIn: (login) => set((state) => ({ user:login })),
  userLoggedOut: () => set({ user:{} }),
  setUserData: (user)=> set((state) => ({ userData:user })),
}))
 
