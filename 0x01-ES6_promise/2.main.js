import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
handleResponseFromAPI(promise);

const rejectedPromise = Promise.reject();
handleResponseFromAPI(rejectedPromise);
