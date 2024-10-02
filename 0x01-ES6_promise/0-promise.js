export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const a = 2;
    if (a === 2) {
      resolve('Success!');
    } else {
      reject(new Error('Failed!'));
    }
  });
}
