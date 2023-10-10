
import { resolve } from 'path'

export default {
    plugins: [],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                request: resolve(__dirname, 'request/request.html')
            }
        }
    }
}