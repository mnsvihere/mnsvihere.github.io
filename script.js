function openProject(url) {
  if (!url) {
    alert("Project link not provided");
    return;
  }
  window.open(url, '_blank');
}
