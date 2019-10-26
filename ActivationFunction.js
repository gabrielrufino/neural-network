class ActivationFunction {
  static linear(x) {
    return x
  }

  static sigmoid(x) {
    return 1/(1 + Math.exp(-x))
  }
}

module.exports = ActivationFunction
