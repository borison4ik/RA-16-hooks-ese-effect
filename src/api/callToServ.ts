export function callToServ<T>(url: string, method: string, body?: any): Promise<T> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, {
        method,
      });

      if (response.ok) {
        const data = await response?.json();
        resolve(data);
      } else {
        throw new Error('Error response status');
      }
    } catch (e) {
      console.log(e);
      reject('Err');
    }
  });
}
