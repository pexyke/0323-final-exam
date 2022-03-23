const currencies = [{
	title: "US Dollar",
	sub: "$",
	text: "USD"
},
{
	title: "Euro",
	sub: "€",
	text: "EUR"
},
{
	title: "Chinese Yuan",
	sub: "¥",
	text: "CNY"
},
{
	title: "Thai Baht",
	sub: "฿",
	text: "THB"
},
{
	title: "British Pound Sterling",
	sub: "£",
	text: "GBP"
},
{
	title: "Ghanaian Cedi",
	sub: "₵",
	text: "GHS"
},
{
	title: "Japanese Yen",
	sub: "￥",
	text: "JPY"
},
{
	title: "Polish Zloty",
	sub: "zł",
	text: "PLN"
}
]

const formatCardData = (currency) => {
    return `<div class="card-container">                
    <div class="card-content">
        <div class="card-data">
            <div class="sub-container">
                <div class="sub">${currency.sub}</div>
            </div>
            <div class="title">
                <span>${currency.title}</span>
            </div>
            <div class="text">
                ${currency.text}
            </div>
        </div>
    </div>
    <div class="card-footer">
        <button class="save-button">
            <span>Save </span>
            <span class="material-icons-outlined">
                arrow_forward
            </span>
        </button>
    </div>
</div>`
}

const insertCurrencies = () => {
    const cardContainer = document.getElementById("currencies");
    currencies.map(currency => cardContainer.insertAdjacentHTML("beforeend", formatCardData(currency)));
}

window.addEventListener("load", insertCurrencies);