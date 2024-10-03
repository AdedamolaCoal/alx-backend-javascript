export default function divideFunction(numerator, denominator) {
  return new Promise((resolve, reject) => {
    try {
      if (denominator !== 0) {
        resolve(numerator / denominator);
      } else {
        throw new Error('cannot divide by zero');
      }
    } catch (error) {
      reject(error);
    }
  });
}
