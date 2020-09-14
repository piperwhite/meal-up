import React from "react";
import { Card, Button } from 'react-bootstrap';

const Recipe = (props) => {

  return (
    <>
      <style type="text/css">
        {`.card{
              border-radius: 4px;
              background: #fff;
              box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
                transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
            cursor: pointer;
          }

          .card:hover{
              transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
          }
        `}
      </style>
        <Card style={{ width: '18rem'}} className="mb-4" onClick={() => props.handleRecipeClick(props.recipe)}>
          <Card.Img variant="top" height={200} src={props.recipe.imageUrl} />
            <Card.Body>
              <Card.Title>{props.recipe.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default Recipe;