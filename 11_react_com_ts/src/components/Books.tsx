interface IBook {
  title: string;
  page: number;
  price: number;  
}

export function Books({title, page, price}: IBook) {
  return (
    <div>
       <h2>Titulo: {title}</h2>
       <span>Páginas: {page}</span>
       <p>Preço: {price}</p>
    </div>
  )  
}