const getTag = (e) => {
  let classes;
  if (typeof e.target.className === 'object') {
    classes = [e.target.className.baseVal];
  } else {
    classes = e.target.className === '' ? [] : e.target.className.split(' ');
  }
  const ids = e.target.id === '' ? [] : e.target.id.split(' ');
  const element = e.target.localName;

  let tag = element;
  classes.forEach((className) => {
    tag += `.${className}`;
  });
  ids.forEach((idName) => {
    tag += `#${idName}`;
  });

  return tag;
}

module.exports = (e, widget) => {
  const tag = getTag(e);
  const time = new Date(Date.now());
  console.log(tag, time, widget);
};
