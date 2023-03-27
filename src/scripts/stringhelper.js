const StringHelper = {

  // Check if a single character is upper case
  isUpperCase(char) {
    return char == char.toUpperCase()
  },

  // Convert 'SomeName' to '/' if first or '/somename'
  toPath(id, name) {
    return id == 0 ? `/` : `/${name.toLowerCase()}`
  },

  // Convert 'SomeName' to 'Some Name'
  toDisplay(name) {

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
  },

  // Converts any numerical value to a string ending in 'px' to be used in CSS code
  //  i.e. input: 35   output: '35px'
  toCSSpx(value) {
    return value.toString() + 'px'
  },

  // Converts any numerical value to a string ending in 's' to be used in CSS code
  //  i.e. input: 0.6   output: '0.6s'
  toCSSs(value) {
    return value.toString() + 's'
  }
}

export default StringHelper