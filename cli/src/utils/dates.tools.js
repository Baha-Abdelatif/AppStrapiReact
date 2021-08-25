export function convertInLocaleDate(dateString) {
  // Prends une date au format String en entrée et retourne un objet Date au format local (ex: mardi 17 août 2021)
  const dateToConvert = new Date(dateString);
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return dateToConvert.toLocaleDateString('fr-FR', dateOptions)
}