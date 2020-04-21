import { setWorldConstructor, setDefaultTimeout } from 'cucumber';

function CustomWorld() {
  this.driver = null;

  setDefaultTimeout(5000);
}

setWorldConstructor(CustomWorld);
