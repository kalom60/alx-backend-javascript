export default function getFullResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success) {
      res({
        status: 200,
        body: 'success',
      });
    } else {
      rej(new Error('The fake API is not working currently'));
    }
  });
}
