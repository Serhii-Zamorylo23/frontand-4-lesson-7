import Handlebars from 'handlebars'; 

const products = [
  { id: 1, name: "Samsung Galaxy S21", price: 25000, available: true },
  { id: 2, name: "MacBook Pro", price: 80000, available: true },
  { id: 3, name: "Sony WH-1000XM4", price: 10000, available: false },
  { id: 4, name: "Xiaomi Mi Band 6", price: 1500, available: true }
];

const productTemplate = `
  <ul>
    {{#each products}}
      <li>
        <h2>{{name}}</h2>
        <p class="price">{{price}} грн</p>
        <p class="{{#if available}}available{{else}}unavailable{{/if}}">{{#if available}}В наявності{{else}}Немає в наявності{{/if}}</p>
      </li>
    {{/each}}
  </ul>
`;

// Компіляція шаблону
const template = Handlebars.compile(productTemplate);

// Рендеринг HTML з даними
document.getElementById('product-list').innerHTML = template({ products });
