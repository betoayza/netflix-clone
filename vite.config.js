import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     target: "https://api.trakt.tv",      
  //     configure: (proxy, options) => {
  //       // proxy will be an instance of 'http-proxy'
  //     },   
  //   },
  // }, 
});
