import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// Apenas em ambiente de desenvolvimento
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  // Limpa console
  tron.clear();

  // Adiciona novo metodo ao objeto console
  console.tron = tron;
}
