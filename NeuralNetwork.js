const Matrix = require('./Matrix')

function sigmoid(x) {
  return 1/(1 + Math.exp(-x))
}

class NeuralNetwork {
  constructor(inputNeurons, hiddenNeurons, outputNeurons) {
    this.inputNeurons  = inputNeurons
    this.hiddenNeurons = hiddenNeurons
    this.outputNeurons = outputNeurons

    this.biasInputHidden  = new Matrix(hiddenNeurons, 1)
    this.biasHiddenOutput = new Matrix(outputNeurons, 1)

    this.biasInputHidden.randomize()
    this.biasHiddenOutput.randomize()

    this.weightInputHidden  = new Matrix(hiddenNeurons, inputNeurons)
    this.weightHiddenOutput = new Matrix(outputNeurons, hiddenNeurons)

    this.weightInputHidden.randomize()
    this.weightHiddenOutput.randomize()
  }

  summary() {
    console.table({
      inputNeurons: this.inputNeurons,
      hiddenNeurons: this.hiddenNeurons,
      outputNeurons: this.outputNeurons
    })

    this.biasInputHidden.print()
    this.biasHiddenOutput.print()

    this.weightInputHidden.print()
    this.weightHiddenOutput.print()
  }

  feedforward(input) {
    input = Matrix.arrayToMatrix(input)
    let hidden = Matrix.multiply(this.weightInputHidden, input)
    hidden = Matrix.add(hidden, this.biasInputHidden)
    hidden.map(sigmoid)
    
    let output = Matrix.multiply(this.weightHiddenOutput, hidden)
    output = Matrix.add(output, this.biasHiddenOutput)
    output.map(sigmoid)

    output.print()
  }
}

module.exports = NeuralNetwork;
