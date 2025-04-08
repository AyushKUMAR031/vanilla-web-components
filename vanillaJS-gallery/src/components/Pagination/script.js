let coinsData = [];
let currentPage = 1;
const postperPage = 8;

async function fetchCryptoData(){
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    coinsData = await response.json();
    renderPage();
    renderPagination();
}

function renderPage(){
    const listContainer = document.getElementById("crypto-list");
    listContainer.innerHTML = ""; // Clear previous content

    //checking the start and end index for the current page to load the data.
    const start = (currentPage - 1) * postperPage; //currentpage - 1  cause array is 0 based index.
    const end = start + postperPage;
    const currentCoins = coinsData.slice(start, end); // .slice extract a section of array from start to end-1,

    currentCoins.forEach(coin => {
        const card = document.createElement("div"); // Create a new div element for each coin
        card.className = "card"; // setting class name for the card styling

        card.innerHTML = `
            <div class="card_image">
                <img src="${coin.image}" alt="${coin.name}" />
            </div>
            <div class="card_info">
                <h2>${coin.name}</h2>
                <h3>$${coin.current_price.toLocaleString()}</h3>
            </div>
        `;
        // created a card - with the name,price,image of coin data.

        listContainer.appendChild(card);//appended the card to the list container.
    });
}

function renderPagination(){
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(coinsData.length / postperPage); // Calculate total pages

    // --- Prev Button ---
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "<";
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage();
            renderPagination();
        }
    });
    pagination.appendChild(prevBtn);

    //card
    for(let i=1; i <= totalPages; i++){
        const btn = document.createElement("button");
        btn.innerText = i;
        btn.className = (i === currentPage) ? "active" : ""; // Highlight the active page button
        btn.addEventListener("click", () =>{
            currentPage = i;
            renderPage();
            renderPagination();
        })
        pagination.appendChild(btn);
    }


    // --- Next Button ---
    const nextBtn = document.createElement("button");
    nextBtn.innerText = ">";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage();
            renderPagination();
        }
    });
    pagination.appendChild(nextBtn);
}

fetchCryptoData();