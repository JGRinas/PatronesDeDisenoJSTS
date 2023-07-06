interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string) {
    console.log("entra a la estrategia");
    if (user === "admin" && password === "entra") {
      console.log("entró");
      return true;
    }
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string) {
    console.log("entra a la estrategia service");
    if (user === "admin" && password === "entra") {
      console.log("entró");
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login("admin", "entra");
auth.setStrategy(new LoginServiceStrategy());
auth.login("admin", "entra");
