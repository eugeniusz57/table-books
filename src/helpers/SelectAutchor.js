export const selectAuthor = sentence => {
  if (sentence === '/') {
    return ['Home'];
  }
  const regex = /[a-zA-Z]/g;
  const split = sentence.split('/');
  if (split[3] || split[4]) {
    return [];
  }
  if (split[2]) {
    const letters = split[2].match(regex);
    const selectedLetters = letters ? letters.join('') : '';
    return ['Home', selectedLetters];
  }
  return sentence;
};
