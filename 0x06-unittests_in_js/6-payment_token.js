const getPaymentTokenFromAPI = (succes) =>
  new Promise((resolve, reject) => {
    if (succes) {
      resolve({ data: 'Successful response from the API' });
    }
  });

module.exports = getPaymentTokenFromAPI;
