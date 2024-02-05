import api from 'apis/api';
//import { DASHBOARD_ROUTE, USER } from 'consts/const';
//import { redirect } from 'next/navigation';
import { create } from 'zustand'

const useAuthStore = create((set:any, get:any) => ({
  auth: {},
  loading: false,

  registerAct: async (payload: {username: string, email: string}) => {
    try {
      set((s:any) => ({...s, loading: true}))
      const response = await api.register(payload);
      // const response = {
      //   status: true,
      //   data: {user: {email: 'ssdss'}}
      // }

      if (response?.status) {
        const data = response.data.data;
        console.log('---', response.data);
        set((s:any) => ({...s, loading: false}))

        // if: otp created =: store user.email in localstorage
        localStorage.setItem('user', JSON.stringify({email: data.user.email}));
        
      }
    }
    catch(error:any) {
      console.log(error?.message || error);
    }
  },

  verifyAct: async (payload: {otp: string, email: string}, callback: any) => {
    try {
      
      //payload.email = user.email;

      set((s:any) => ({...s, loading: true}))
      const response = await api.verify(payload);
      
      //callback('id000');

      //return;
      if (response?.status) {
        const data = response.data.data;
        console.log(data);
        set((s:any) => ({...s, loading: false}))

        //localStorage.setItem(USER, JSON.stringify(data.user));
        callback(data.user._id);
      }
    }
    catch(error:any) {
      console.log(error?.message || error);
    }
  },

  logoutAct: async () => {
    try {
      
      //payload.email = user.email;

      set((s:any) => ({...s, loading: true}))
      const response = await api.logout();

      if (response?.status) {
        const msg = response.data.msg;
        console.log(msg);
        set((s:any) => ({...s, loading: false}))

        //localStorage.removeItem(USER);
        //callback();
      }
    }
    catch(error:any) {
      console.log(error?.message || error);
    }
  },
}))

const unsub = useAuthStore.subscribe((state) => console.log('authStore updated**!', state));

export default useAuthStore