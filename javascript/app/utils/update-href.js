export default (element) => {
  const currentHref = element.attr('href');
  const newHref = currentHref.slice(1, currentHref.length);
  element.attr('href', `${newHref}`);
};
