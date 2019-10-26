class ActivationFunction {
  static sigmoid(x) {
    return 1/(1 + Math.exp(-x))
  }
}

module.exports = ActivationFunction
