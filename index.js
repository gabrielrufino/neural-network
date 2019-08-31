const NeuralNetwork = require('./NeuralNetwork')
const Matrix = require('./Matrix')

const network = new NeuralNetwork(1, 3, 1)

network.feedforward([4])
