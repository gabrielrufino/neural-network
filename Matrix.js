class Matrix {
  constructor(rows, columns) {
    this.rows = rows
    this.columns = columns

    this.data = []

    for (let i = 0; i < rows; i++) {
      let arr = []

      for (let j = 0; j < columns; j++) {
        arr.push(0)
      }

      this.data.push(arr)
    }
  }

  print() {
    console.table(this.data)
  }

  randomize() {
    this.map(() => Math.random() * 2 - 1)
  }

  map(callback) {
    this.data = this.data.map((row, i) =>
      row.map((number, j) =>
        callback(number, i, j)
      )
    )

    return this
  }

  static map(a, callback) {
    const matrix = new Matrix(a.rows, a.columns)

    matrix.data = matrix.data.map((row, i) =>
      row.map((number, j) =>
        callback(number, i, j)
      )
    )

    return matrix
  }

  static arrayToMatrix(array) {
    const matrix = new Matrix(array.length, 1)

    matrix.map((_, i, __) => array[i])

    return matrix
  }

  static add(a, b) {
    const result = new Matrix(a.rows, b.columns)

    result.map((_, i, j) => a.data[i][j] + b.data[i][j])

    return result
  }

  static multiply(a, b) {
    const result = new Matrix(a.rows, b.columns)

    result.map((number, i, j) => {
      let sum = 0
      for (let k = 0; k < a.columns; k++) {
        let elem1 = a.data[i][k]
        let elem2 = b.data[k][j]

        sum += elem1 * elem2
      }
      return sum
    })

    return result
  }
}

module.exports = Matrix
