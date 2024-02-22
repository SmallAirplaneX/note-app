// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    // ...custom presets
  ],
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })]
  ],
  shortcuts: [
    // you could still have object style
    {
      btn: 'py-2 px-4 font-semibold rounded-lg shadow-md'
    },
    // dynamic shortcuts
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`]
  ]

})