document.addEventListener("DOMContentLoaded", () => {
    const chessboardContainer = document.getElementById("chessboard-container");

    const createChessboard = () => {
        const board = document.createElement("div");
        board.id = "chessboard";

        const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

        // Add row numbers and column letters
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.classList.add((i + j) % 2 === 0 ? "light" : "dark");
                board.appendChild(cell);

                if (j === 0) {
                    const rowNumber = document.createElement("div");
                    rowNumber.classList.add("coordinate", "row-number");
                    rowNumber.textContent = 8 - i;
                    rowNumber.style.top = `${i * 50 + 25}px`;
                    board.appendChild(rowNumber);
                }

                if (i === 7) {
                    const columnLetter = document.createElement("div");
                    columnLetter.classList.add("coordinate", "column-letter");
                    columnLetter.textContent = letters[j];
                    columnLetter.style.left = `${j * 50 + 25}px`;
                    board.appendChild(columnLetter);
                }
            }
        }

        chessboardContainer.appendChild(board);
    };

    const solveButton = document.getElementById("solve-button");

    const solveEightQueens = () => {
        // Example positions for 8 queens solution (index = row, value = column)
        const solution = [0, 4, 7, 5, 2, 6, 1, 3];
        const cells = document.querySelectorAll("#chessboard .cell");

        // Clear previous queens
        cells.forEach(cell => {
            cell.innerHTML = "";
            cell.classList.remove("queen");
        });

        // Place queens on the chessboard
        solution.forEach((col, row) => {
            const index = row * 8 + col;
            const cell = cells[index];
            cell.classList.add("queen");

            const queenImg = document.createElement("img");
            queenImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MPSVgILcViVtFcn2B19SqtedOJ9apzXayA&s";
            queenImg.alt = "Queen";
            cell.appendChild(queenImg);
        });
    };

    createChessboard();

    solveButton.addEventListener("click", solveEightQueens);
});
