export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function nav() {
  // The nav is always active
  return true;
}

export function page1(location) {
  return prefix(location, "home");
}

export function page2(location) {
  return prefix(location, "about");
}

export function login(location) {
  // The nav is always active
  return prefix(location, "contact");
}
