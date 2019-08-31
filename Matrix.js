class Matrix {
  constructor(rows, columns) {
    this.rows = rows
    this.columns = columns

    this.data = []

    for (let i = 0; i < rows; i++) {
      let arr = []

      for (let j = 0; j < columns; j++) {
        arr.push(1)
      }

      this.data.push(arr)
    }
  }

  map(callback) {
    this.data = this.data.map((row, i) =>
      row.map((number, j) =>
        callback(number, i, j)
      )
    )

    return this
  }

  static add(a, b) {
    const result = new Matrix(a.rows, b.columns)

    result.map((_, i, j) => a.data[i][j] + b.data[i][j])

    return result
  }
}

module.exports = Matrix
