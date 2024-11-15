import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

// #region styled-components
const StyledCard = styled.div`
  .card {
    height: var(--card-height);
    border: var(--border);
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) =>
      theme.name === "light" ? "" : "var(--bs-gray)"};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-img-top {
      height: 50%;
      object-fit: contain;
    }

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};
      }
    }

    .marg-bottom {
      margin-bottom: 20px;
    }


    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) =>
        theme.name === "light" ? "" : "var(--bs-gray-dark)"};

      .card-link {
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};

        &:hover {
          color: var(--bs-primary);
        }
      }
    }

    &:hover {
      transform: scale(1.03);
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  demo: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.node,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const ProjectCard = ({ demo, description, image, name, url }) => {
  console.log(demo);
  return (
    <StyledCard>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>

          {name === "Project_Booki" ?  <Card.Text> <br></br><div className=" overflow-auto text-center marg-bottom"><strong> Problème rencontré : <br></br><br></br> </strong>
                Le problème que j’ai rencontré était de régler la largeur de certaines conteneur en utilisant la propriété flex pour passer d’une version à une autre, 
              étant donné que c’était la première fois que je manipulais les propriétés d’alignement CSS Flexbox.</div><br></br>
            
            <div className=" overflow-auto text-center marg-bottom" ><strong>Solution pour résoudre le problème  : <br></br><br></br></strong>
                Pour résolver le problème, j’ai fait des recherches sur le net(site web: developer.mozilla.org et geeksforgeeks.org)
            et j’ai également discuter avec mon mentor pour écouter ses conseils judicieux afin de trouver la solution adéquate à mon problème :
            De ce fait,j’ai utilisé la propriété flex-wrap avec la valeur wrap, suivi du propriété flex-direction: column;  
            ce qui permet aux éléments d’aller à la ligne lorsque la largeur du conteneur est dépassée. </div> <br></br> 

            <div className="overflow-auto text-center marg-bottom">
              <strong>Tehnos ou compétences utilisés :  <br></br><br></br> </strong> 
                "HTML", "CSS", "Responsive", "VSCode", "Figma"
            </div>

          </Card.Text> : null}
           
        { name === "Projet-Kasa-React" ?   <Card.Text> <br></br><div  className=" overflow-auto text-center marg-bottom" >
            <strong>Problème rencontré : <br></br><br></br></strong>  
            Concernant ce projet, le problème que j’ai rencontré était de comprendre la logique des Hooks et gérer le state component.    

          </div>

          <div  className=" overflow-auto text-center marg-bottom">
          <strong> Solution pour résoudre le problème : <br></br><br></br> </strong>  
          Pour résolver le problème j’ai lu plusieurs articles et regarder des vidéos sur youtube pour pouvoir bien comprendre et utiliser les hooks, 
          ce qui a allégé mon code en le rendant plus facile à maintenir et en gagnant en lisibilité. Grâce aux recherches effectuées, 
          j’ai acquéri des compétences sur les Hooks comme le useState Hook qui permet de suivre l’état d’un composant de fonction. 

          </div> <br></br>

          <div className="overflow-auto text-center marg-bottom">
              <strong>Tehnos ou compétences utilisés :  <br></br><br></br> </strong> 
              "React", "React-Router", "JavaScript", "Sass", "Responsive", "GitHub", "NodeJS"
          </div>

        </Card.Text> : null 

        }
         
       
        
          {/*demo !== null ? (
            <Card.Link href={demo}>
              {"Live Demo "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null*/ } 

        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url}>
            {"View on GitHub "}
            <Icon icon="icomoon-free:github" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCard>
  );
};

ProjectCard.propTypes = propTypes;
// #endregion

export default ProjectCard;
