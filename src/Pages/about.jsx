import aboutImg from "../assets/aboutImg.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function About() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">about</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="contact" to="/contact">
                contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <img className="about-us-image" src={aboutImg} alt="flamecno-guitar" />
      <div class="about-us-content">
        <h2>Our history</h2>
        <h3>Our history The heritage of the Luthier</h3>
        <p>
          Valencia, a city that is located in Southern Europe on the shores of
          the Mediterranean Sea, is the home of one of the most prestigious
          workshops o f the SPANISH GUITAR - GUITARRAS ESTEVE.
        </p>
        <p>
          In 1957 Francisco Esteve, Manuel Adalid and Antonio Monfort decided to
          establish their own guitar workshop, starting their journey into the
          construction of the instrument.
        </p>
        <p>
          <b>ESTEVE</b>'s team of 52 artisans is our greatest asset. Our
          craftsmen share a common passion for the guitar and years of
          experience . We love our work and are proud of each instrument we
          finish!
        </p>
        <p>
          <b>ESTEVE</b> guitars are renowned internationally for their excellent
          sound and finish. Our instruments are known for combining the best
          materials in their construction, as well as for bridging that
          difficult gap between artisanal tradition and modern building
          techniques
        </p>
        <p>
          The <b>ESTEVE</b> guitar is the sound of the Spanish soul, inspiring
          musicians with its sonorous character, its playability, and its purity
          of sound. The pictures you’ll find on these pages are a proud
          testament to the ancient art of luthiery that lives on in our guitars.
        </p>
      </div>
    </>
  );
}
export default About;
