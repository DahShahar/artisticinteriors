function toggleVisibility(subject, link) {
  console.log(link);
    var elementClasses = document.getElementById(subject).classList;

  if (elementClasses.contains('hidden')) {
    elementClasses.replace('hidden', 'unhidden');
    link.text = 'See Less';
  } else {
    elementClasses.replace('unhidden', 'hidden');
    link.text = 'See More';
  }
}
