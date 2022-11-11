import Card from "react-bootstrap/Card";

const MyCard = ({ image, noticia = "No tento titulo" }) => {
  return noticia && image ? (
    <Card style={{ width: "18rem" }}>
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{noticia}</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    "No tienes parametro"
  );
};

export default MyCard;

/* 
    Mismo ejemplo con class component


    import Card from "react-bootstrap/Card";

class MyCards extend React.Component {

    const{image,message}=this.props

  return noticia && image ? (
    <Card style={{ width: "18rem" }}>
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{noticia}</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    "No tienes parametro"
  );
};
*/
