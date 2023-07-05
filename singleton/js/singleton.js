//patrón creacional
class Singleton {
  constructor() {
    console.log("Entrando al constructor");
    if (Singleton.instance) {
      console.log("Ya existe");
      return Singleton.instance;
    }
    console.log("Se crea");
    Singleton.instance = this;
  }

  static getInstance() {
    return Singleton.instance;
  }
}

//Se crea
const Singleton = new Singleton();
//Ya existe
const Singleton2 = new Singleton();

class WeekDays {
  daysEs = ["Lunes", "Martes", "Miercoles"];
  daysEn = ["Monday", "Tuesday", "Wednesday"];

  constructor(lang) {
    this.lang = lang;

    if(WeekDays.instance){
        return WeekDays.instance;
    }

    WeekDays.instance = this;
  }

  getDays(){
    return this.lang === "es" ? this.daysEs : this.daysEn;
  }
}

const weekDays = new WeekDays("en")
const weekDays2 = new WeekDays("es")
