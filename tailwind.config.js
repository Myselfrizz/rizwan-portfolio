export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { paper: 'rgb(var(--paper) / <alpha-value>)', card: 'rgb(var(--card) / <alpha-value>)', ink: 'rgb(var(--ink) / <alpha-value>)', mute: 'rgb(var(--mute) / <alpha-value>)', line: 'rgb(var(--line) / <alpha-value>)', accent: 'rgb(var(--accent) / <alpha-value>)',
      lime: '#d9ff43', lav: '#c9c0ff', mint: '#bddba0', sun: '#ffe58a', coral: '#ff9f8f' },
    fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], body: ['"Instrument Sans"', 'system-ui', 'sans-serif'], serif: ['"Instrument Serif"', 'Georgia', 'serif'] },
  } },
}
