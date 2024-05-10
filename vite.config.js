import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: './', // Configura la raíz del proyecto
})
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const { createProxyMiddleware } = require('http-proxy-middleware');

     module.exports = {
       devServer: {
         before: function(app) {
           app.use('/api', createProxyMiddleware({
             target: 'https://besalcoinmobiliaria.cl',
             changeOrigin: true,
             pathRewrite: {
               '^/api': '/'
             }
           }));
         }
       }
     };