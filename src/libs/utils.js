export default {

  format: function(s, c) {
    return s.replace(/{{\s(\w+)\s}}/g, function(m, p) {
      return c[p]
    })
  },

  splitCamelCase: function(s) {
    return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  },

  capitalize: function(s) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase()
  },

  splitCapitalize: function(s, spliter) {
    let data, i

    spliter = spliter || '-'
    data = s.split(spliter)

    for (i = 0; i < data[i]; i++) {
      data[i] = this.capitalize(data[i])
    }

    return data.join('')
  }

}
