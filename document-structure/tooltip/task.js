const tooltips = document.querySelectorAll(".has-tooltip");

tooltips.forEach((tooltips) => {
  tooltips.addEventListener("click", function (e) {
    e.preventDefault();
    const title = this.getAttribute("title");

    const toolText = document.createElement("div");
    toolText.classList.add("tooltip_active", "tooltip");
    toolText.innerText = title;
    this.insertAdjacentElement("afterend", toolText);

    const tooltipPosition = this.getBoundingClientRect();
    toolText.style.top = tooltipPosition.top + 20 + "px";
    toolText.style.left = tooltipPosition.left + "px";

    document.onmouseout = function () {
      if (tooltips) {
        toolText.classList.remove("tooltip_active");
      }
    };
  });
});
