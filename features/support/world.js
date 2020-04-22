import { setWorldConstructor, setDefaultTimeout } from 'cucumber';

function CustomWorld() {
  this.driver = null;

  setDefaultTimeout(10000);
}

setWorldConstructor(CustomWorld);
