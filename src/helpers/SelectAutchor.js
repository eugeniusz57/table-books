export const selectAuthor = sentence => {
  const regex = /[a-zA-Z]/g;
  const split = sentence.split('/');
  if (split[2]) {
    const letters = split[2].match(regex);
    const selectedLetters = letters ? letters.join('') : '';
    return selectedLetters;
  }

  return sentence;
};
