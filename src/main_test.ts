
import { Container, Inject } from './typescript-ioc';


class SimppleInject {
    @Inject public dateProperty: Date;
}

class ConstructorSimppleInject {
    @Inject public aDateProperty: Date;

    public testOK: boolean;

    constructor() {
        if (this.aDateProperty) {
            this.testOK = true;
        }
    }
}

abstract class AbsClass {
    constructor(public date: Date) { }
}

class ConstructorInjected extends AbsClass {
    constructor(@Inject public anotherDate: Date) {
        super(anotherDate);
    }
}
const instance1: SimppleInject = new SimppleInject();
console.log(instance1.dateProperty);


const instance2: ConstructorSimppleInject = new ConstructorSimppleInject();
if (instance2.testOK==true)
{
    console.log("ok")
}
else
{
    console.log("not ok")   
}


const instance3: ConstructorInjected = Container.get(ConstructorInjected);
console.log(instance3.anotherDate)
console.log(instance3.date)
console.log(instance3.date)

