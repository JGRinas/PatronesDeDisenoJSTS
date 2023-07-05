//con ts podemos privar algo, es decir modificar su punto de acceso
//y podemos hacer algo de un tipo específico
class SingletonTS{
    private static instance: SingletonTS;
    public random: number;

    private constructor(){
        this.random = Math.random()
    }

    public static getInstance(): SingletonTS{
        if(!this.instance){
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}

// const singleton = new SingletonTS();
const singleton = SingletonTS.getInstance();