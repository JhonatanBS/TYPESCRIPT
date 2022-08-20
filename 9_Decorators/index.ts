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