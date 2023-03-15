export class RouteHelper {

  // Check if a single character is upper case
  static isUpperCase(char) {
    return char == char.toUpperCase();
  }

  // Convert 'SomeName' to '/' if first or '/somename'
  static toPath(id, name) {
    return id == 0 ? `/` : `/${name.toLowerCase()}`
  }

  // Convert 'SomeName' to 'Some Name'
  static toDisplay(name) {

    // Grab first capital
    var newName = name[0]

    // Concat the rest of string
    for (var i = 1; i < name.length; i++) {
      const char = name[i]

      // Add space before upper case characters
      if (this.isUpperCase(char)) {
        newName += ' '
      }

      // Concat next char
      newName += char
    }
    return newName
  }
}