
const resetPreviewColors = () => removeClasses();

const iconsList = [emailPlace, phonePlace, linkedinPlace, githubPlace];

const resetPreviewIcons = () => {
  for (const item of iconsList) {
    item.firstElementChild.style.opacity = 0.5;
  }
};

const resetPreview = () => {
  resetPreviewColors();
  clearForm();
  resetPreviewIcons();
  clearPhoto();
};

const btnReset = document.querySelector(".js-reset");

btnReset.addEventListener("click", resetPreview);