import ThemeChanger from './ThemeChanger';

export default function Header({theme, setTheme}) {
  return (
    <header className="header">
      <p>devfinder</p>
      <ThemeChanger theme={theme} setTheme={setTheme} />
    </header>
  );
}
