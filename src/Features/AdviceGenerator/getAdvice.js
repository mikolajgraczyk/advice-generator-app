export const getAdvice = async () => {
    const randomNumber = Math.random() * 1000000;

    const response = await fetch(`https://api.adviceslip.com/advice?${randomNumber}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
