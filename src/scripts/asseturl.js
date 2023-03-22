const AssetURL = {
  
  get(name, path) {
    if (arguments.length == 1) {
      return new URL(`../assets/${name}`, import.meta.url).href  
    }
    else {
      return new URL(`../assets/${path}/${name}`, import.meta.url).href
    }
  }
}

export default AssetURL