export default class Storage {
  static getData(dataName) {
    return JSON.parse(localStorage.getItem(dataName) || '[]')
  }

  static setData(dataName, newData) {
    localStorage.setItem(
      dataName,
      JSON.stringify([...newData])
    )
  }

  static removeData(dataName) {
    localStorage.removeItem(dataName)
  }
}