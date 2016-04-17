import webpack from 'webpack'
import webpackConfig from '../webpack/webpack.config.js'

let compiler = webpack(webpackConfig)
runCompiler()

function runCompiler() {
  try {
    compiler.run((err, stats) => {
      if (err) {
        console.log('Error has occured while compiling', err)
      }
    })
  } catch (err) {
    console.error('compiling has failed', err)
  }
}
