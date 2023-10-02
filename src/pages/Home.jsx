import ListPost from "../componentes/ListPost"
import ListCategorias from "../componentes/ListCategorias"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategorias/>
      <ListPost url={"/posts"}/>
    </main>
  )
}

export default Home
