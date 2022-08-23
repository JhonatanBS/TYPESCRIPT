export function App() {
  /* Variáveis */
  
  const name: string = "Jhonatan";
  const isWorking: boolean = true;
  const salary: number = 5500;

  /* Funções */

  function employee(name: string, salary: number): string {
    return `Meu nome é ${name} e recebo ${salary}.`;
  }

  return (
    <div>
      <h1>React com Typescript</h1>
      <p>Nome: {name}</p>
      <p>Salário: {salary}</p>
      {isWorking && <p>Estou no trabalho</p>}

      <div>{employee(name, salary)}</div>
    </div>
  )
}
