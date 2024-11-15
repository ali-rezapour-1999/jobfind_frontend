import { create } from "zustand";

interface AuthState {
  user: { email: string; token: string } | null;
  loading: boolean;
  login: (email: string, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  login: (email, token) => {
    set({ user: { email, token }, loading: false });
    localStorage.setItem(
      "authToken",
      JSON.stringify({ token: token, email: email }),
    );
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("authToken");
    localStorage.removeItem("item_pro");
  },
  setLoading: (loading) => set({ loading }),
}));

export default useAuthStore;
