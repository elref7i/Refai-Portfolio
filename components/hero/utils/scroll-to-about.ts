export const scrollToAbout = () => {
  const element = document.querySelector("#about");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
