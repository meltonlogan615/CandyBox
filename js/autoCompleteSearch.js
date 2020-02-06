// Auto Complete Search from brandname.json 

const endpoint = 'brandname.json';

const candies = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => candies.push(...data));

function findMatches(wordToMatch, candies) {
  return candies.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.brandname.match(regex) || place.brandparent.match(regex)
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, candies);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const brandnameName = place.brandname.replace(regex, `<span class="hl">${this.value}</span>`);
    const brandparentName = place.brandparent.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${brandnameName}, ${brandparentName}</span>
        <span class="regionb">${place.regionb}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

