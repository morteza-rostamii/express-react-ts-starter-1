import api from 'apis/api';
//import { DASHBOARD_ROUTE, USER } from 'consts/const';
//import { redirect } from 'next/navigation';
import { create } from 'zustand'

const useAuthStore = create((set:any, get:any) => ({
  welcomeModalOpen: false,

  setWelcomeModelOpenAct: () => {
    set((s:any) => ({
      ...s,
      welcomeModalOpen: true,
    }))
  },
  setWelcomeModelOpenClose: () => {
    set((s:any) => ({
      ...s,
      welcomeModalOpen: true,
    }))
  },
}))

const unsub = useAuthStore.subscribe((state) => console.log('generaStore updated**!', state));

export default useAuthStore