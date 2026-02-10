import path from 'path';

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic',
  })],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
});
