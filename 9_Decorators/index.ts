// Decorators

function first() {
  console.log("Isso será executado primeiro");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, descriptor);
  };
}
 
class ExampleClass {
  @first()
  method() {}
}

// Multiplos Decorators

function a() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executando o decorator a")
  }
}

function b() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executando o decorator b")
  }
}

function c() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executando o decorator c")
  }
}

class Example {
  @c()
  @b()
  @a()
  ordem() {};
}