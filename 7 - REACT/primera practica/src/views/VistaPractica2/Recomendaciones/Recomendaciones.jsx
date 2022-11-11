import Card from "../../../components/Card";
/* import "./Recomendaciones.css"; */

const Recomendaciones = () => {
  return (
    <div className="recomendaciones">
      <Card
        image="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"
        noticia="Noticia 1"
      ></Card>
      <Card></Card>
      <Card noticia="Noticia 3"></Card>
    </div>
  );
};

export default Recomendaciones;
