export function App() {
  /* Variáveis */
  
  const name: string = "Jhonatan";
  const isWorking: boolean = true;
  const salary: number = 5500;

  return (
    <div>
      <h1>React com Typescript</h1>
      <p>Nome: {name}</p>
      <p>Salário: {salary}</p>
      {isWorking && <p>Estou no trabalho</p>}
    </div>
  )
}
