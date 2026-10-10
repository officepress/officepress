//Runs before paint; storage can be denied. A failure retains the family
// light default.
try {
  document.documentElement.dataset.mode =
    localStorage.getItem('op-mode') === 'dark' ? 'dark' : 'light';
} catch {
  document.documentElement.dataset.mode = 'light';
}
