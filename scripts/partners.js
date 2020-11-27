function toggleVisibility(subject) {
  var elementClasses = document.getElementById(subject).classList;

  if (elementClasses.contains('unexpanded')) {
    elementClasses.replace('unexpanded', 'expanded');
  } else {
    elementClasses.replace('expanded', 'unexpanded');
  }
}
