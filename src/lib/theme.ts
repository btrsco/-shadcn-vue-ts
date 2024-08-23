export type Theme = 'dark' | 'light' | 'system';

export function getTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'system';
}

export function setTheme(theme: Theme): void {
  localStorage.setItem('theme', theme);
  document.body.classList.toggle(
    'dark',
    theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

export function loadTheme(): void {
  setTheme(getTheme());
}

export function watchTheme(): void {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      const isDarkMode = event.matches;
      document.body.classList.toggle('dark', isDarkMode);
    });
}
