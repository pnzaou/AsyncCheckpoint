async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

  
async function awaitCall() {
    try {
        const response = await fetch('https://urlinconnue/blabla');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Échec de récupération des données depuis l\'API:', error);
    }
}

  
awaitCall()

  
async function awaitCall() {
    try {
        const response = await fetch('https://urlinconnue/blabla');
        if (!response.ok) {
        throw new Error('Échec de récupération des données depuis l\'API.');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}