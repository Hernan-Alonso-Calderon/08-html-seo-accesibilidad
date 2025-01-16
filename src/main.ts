const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion__title") as HTMLElement;
  const content = item.querySelector(".accordion__content") as HTMLDivElement;

  document.addEventListener("DOMContentLoaded", () => {
    header.addEventListener("click", () => {
      const isOpen = header.classList.contains("active");

      // Close all open accordion items
      accordionItems.forEach((otherItem) => {
        const otherHeader = otherItem.querySelector(".accordion__title")!;
        const otherContent = otherItem.querySelector(
          ".accordion__content"
        )! as HTMLDivElement;
        otherHeader.classList.remove("active");
        otherContent.style.maxHeight = "0";
      });

      // Open the clicked accordion item if it wasn't already open
      if (!isOpen) {
        header.classList.add("active");
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });
});
