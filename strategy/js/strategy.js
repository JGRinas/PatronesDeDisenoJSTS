class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + (amount + this.tax) - this.discount;
  }
}

class ForeignSaleStrategy {
  calculate(amount) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 20;
  }
}

const regularSale = new RegularSaleStrategy(0.21);
const discountSale = new DiscountSaleStrategy(0.21, 3);

const sale = new SaleContext(regularSale);

console.log(sale.calculate(10));

sale.setStrategy(discountSale);

console.log(sale.calculate(10));

sale.setStrategy(discountSale);

console.log(sale.calculate(10));

const data = [
  {
    name: "blue label",
    country: "test",
    info: "Un elisir",
  },
  {
    name: "Corona",
    country: "test",
    info: "Un elisir",
  },
  {
    name: "Delirium Tremens",
    country: "test",
    info: "Un elisir",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, bebida) => {
      return (
        ac +
        `<div>
      <h2>${bebida.name}</h2>
      <p>${bebida.info}</p>
      </div>
      <hr>
      `
      );
    }, "");
  }
}

const info = new InfoContext(new ListStrategy(), data, content);
