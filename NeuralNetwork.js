const Matrix = require('./Matrix')

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
}

module.exports = NeuralNetwork;
