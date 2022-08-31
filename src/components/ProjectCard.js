import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, demo }) => {

    return (
        <Col sm={6} md={4} className="squares">
            <a href={demo} target="_blank"><img src={imgUrl} alt="img1" /></a>
            <div className="proj-txtx"></div>
            <h4>{title}</h4>
            {/* <span>{description}</span> */}
        </Col>
    )
}