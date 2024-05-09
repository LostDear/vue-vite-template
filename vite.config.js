import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import UnoCSS from "unocss/vite";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            dirs: ["./src/components"],
        }),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                "pinia",
                {
                    // OnBeforeRouteLeave 'vue-router’的这个Api未被自动导入，在这里补充
                    "vue-router": ["onBeforeRouteLeave"],
                }
            ],
            dirs: ["./src/api", "./src/components", "./src/store"],
            vueTemplate: true,
            // 生成auto-import.d.ts声明文件
            dts: "src/types/auto-import.d.ts",
            // 解析Api
            resolvers: [ElementPlusResolver()],
            eslintrc: {
                // 项目中使用了 eslint，那么虽然可以正常使用 API 了，但是 eslint 还是会报没有引入的报错。下面的配置可以处理这种情况
                enabled: true, // 会在根目录下自动生成 .eslintrc-auto-import.json 文件
            }
        })
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    }
});
