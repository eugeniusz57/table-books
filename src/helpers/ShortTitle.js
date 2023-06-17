export const shortTitle = title => {
  if (title.length >= 60) {
    const shortTitle = title.split(' ').slice(0, 5).join(' ') + '...';
    return shortTitle;
  }
  return title;
};
