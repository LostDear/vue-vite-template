import {defineConfig} from "vite";

export default defineConfig({
    shortcuts: {
        'center': 'flex items-center justify-center',
        'f-col': 'flex flex-col',
        'f-row': 'flex flex-row',
        'f-wrap': 'flex flex-wrap',
    },
    rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
        [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
    ]
})
