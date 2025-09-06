import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("FluentFriends-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("FluentFriends-theme", theme);
    set({ theme });
  },
}));
