//@ts-check

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light";
}

(function setDarkModeClass() {
  const colorMode = getInitialColorMode();
  if (colorMode === "dark") {
    console.log(
      "🚀 ~ file: darkModeScript.js:26 ~ setDarkModeClass ~ colorMode",
      colorMode
    );
    window.document.body.classList.add("dark");
    return;
  } else {
    window.document.body.classList.remove("dark");
  }
})();
