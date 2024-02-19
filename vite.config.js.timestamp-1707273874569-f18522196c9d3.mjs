// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/%E6%96%87%E6%A1%A3/%E9%A1%B9%E7%9B%AE/%E6%AF%95%E8%AE%BE/%E5%89%8D%E7%AB%AF/note-app/node_modules/.pnpm/vite@5.0.12/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E6%96%87%E6%A1%A3/%E9%A1%B9%E7%9B%AE/%E6%AF%95%E8%AE%BE/%E5%89%8D%E7%AB%AF/note-app/node_modules/.pnpm/@vitejs+plugin-vue@5.0.3_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/%E6%96%87%E6%A1%A3/%E9%A1%B9%E7%9B%AE/%E6%AF%95%E8%AE%BE/%E5%89%8D%E7%AB%AF/note-app/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/%E6%96%87%E6%A1%A3/%E9%A1%B9%E7%9B%AE/%E6%AF%95%E8%AE%BE/%E5%89%8D%E7%AB%AF/note-app/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/vite.js";
import { NaiveUiResolver } from "file:///D:/%E6%96%87%E6%A1%A3/%E9%A1%B9%E7%9B%AE/%E6%AF%95%E8%AE%BE/%E5%89%8D%E7%AB%AF/note-app/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///D:/%E6%96%87%E6%A1%A3/%E9%A1%B9%E7%9B%AE/%E6%AF%95%E8%AE%BE/%E5%89%8D%E7%AB%AF/note-app/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar"
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTY1ODdcdTY4NjNcXFxcXHU5ODc5XHU3NkVFXFxcXFx1NkJENVx1OEJCRVxcXFxcdTUyNERcdTdBRUZcXFxcbm90ZS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NjU4N1x1Njg2M1xcXFxcdTk4NzlcdTc2RUVcXFxcXHU2QkQ1XHU4QkJFXFxcXFx1NTI0RFx1N0FFRlxcXFxub3RlLWFwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JTk2JTg3JUU2JUExJUEzLyVFOSVBMSVCOSVFNyU5QiVBRS8lRTYlQUYlOTUlRTglQUUlQkUvJUU1JTg5JThEJUU3JUFCJUFGL25vdGUtYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgTmFpdmVVaVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFpdmUtdWknOiBbXG4gICAgICAgICAgICAndXNlRGlhbG9nJyxcbiAgICAgICAgICAgICd1c2VNZXNzYWdlJyxcbiAgICAgICAgICAgICd1c2VOb3RpZmljYXRpb24nLFxuICAgICAgICAgICAgJ3VzZUxvYWRpbmdCYXInXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgIF1cbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpXVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1VLFNBQVMsZUFBZSxXQUFXO0FBRXRXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHVCQUF1QjtBQU5pSSxJQUFNLDJDQUEyQztBQVFsTixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxVQUNFLFlBQVk7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUVGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsZ0JBQWdCLENBQUM7QUFBQSxJQUMvQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
