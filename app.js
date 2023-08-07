function createGrid(numOfSquares) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  container.style.setProperty("--numOfSquares", numOfSquares);

  for (let rows = 0; rows < numOfSquares; rows++) {
    for (let columns = 0; columns < numOfSquares; columns++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid");
      container.appendChild(gridSquare);
    }
  }

  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid")) {
      event.target.style.backgroundColor = "black";
    }
  });
}

const button = document.querySelector("#button button");
button.addEventListener("click", () => {
  const numOfSquares = parseInt(
    prompt("Enter the number of squares per side (up to 100):")
  );
  if (!isNaN(numOfSquares)) {
    createGrid(numOfSquares);
  }
});
