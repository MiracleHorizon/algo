import { defineConfig } from 'vite'

const aliases = [
  {
    find: '@structures',
    replacementPath: './src/data-structures'
  },
  {
    find: '@algos',
    replacementPath: './src/algos'
  }
]

export default defineConfig({
  resolve: {
    alias: aliases.map(({ find, replacementPath }) => {
      const url = new URL(replacementPath, import.meta.url)

      return {
        find,
        replacement: url.pathname
      }
    })
  }
})
