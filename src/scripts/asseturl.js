// asseturl.js
export default function(name, folder) {
  if (!folder) {
    return new URL(`../assets/${name}`, import.meta.url).href  
  }
  else {
    return new URL(`../assets/${folder}/${name}`, import.meta.url).href
  }
}