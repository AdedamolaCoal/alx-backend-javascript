import asyncUploadUser from './100-await';

async function test() {
  const value = await asyncUploadUser();
  console.log(value);
};

test();
