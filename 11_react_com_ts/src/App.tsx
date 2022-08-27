import { Books } from "./components/Books";

export function App() {
  /* Variáveis */
  
  const name: string = "Jhonatan";
  const isWorking: boolean = true;
  const salary: number = 5500;

  /* Funções */

  function employee(name: string, salary: number): string {
    return `Meu nome é ${name} e recebo ${salary}.`;
  }

  /* Desestruturação */

  const books = [
    {title: "Matemática", page: 500, price: 109.50},
    {title: "Geografia", page: 300, price: 59.50},
    {title: "Português", page: 250, price: 200.22},
  ]

  return (
    <div>
      <h1>React com Typescript</h1>
      <p>Nome: {name}</p>
      <p>Salário: {salary}</p>
      {isWorking && <p>Estou no trabalho</p>}

      <div>{employee(name, salary)}</div>

      {books.map( book => {
        return <Books key={book.title} title={book.title} page={book.page} price={book.price}/>
      })}
    </div>
  )
}
