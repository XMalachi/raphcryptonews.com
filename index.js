/*Hamburger Animation*/
const nav = document.querySelector(`.nav`);
const closeMenu = document.querySelector(`.closeMenu`);
const openMenu = document.querySelector(`.openMenu`);
// const openservice = document.querySelector(`.#`);
// const opencontact = document.querySelector(`.#`);


openMenu.addEventListener(`click`,show);
closeMenu.addEventListener(`click`,close);
// openservice.addEventListener(`click`,close);
// opencontact.addEventListener(`click`,close);

function show() {
    nav.style.display = 'flex';
    nav.style.top = '0';

}
function close() {
    nav.style.top = '-150%';

}

{/* <script src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js"></script>
<coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget> */}