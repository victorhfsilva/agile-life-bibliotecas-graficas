# React Bootstrap

## O que é?

React Bootstrap é uma biblioteca que leva os componentes do Bootstrap para o React.

## Vantagens

- Integração com React: incorpora conceitos como componentização e estados do React.

- Reutilização de Componentes: oferece uma ampla variedade de componentes pré-projetados.

- Estilo Consistente: Mantêm uma consistência por meio de estilos e designs padrão do Bootstrap.

- Responsividade: Utiliza o sistema de grade responsiva do Bootstrap.

- Customização facilitada: Permite a personalização de componentes por meio de classes do Bootstrap ou estilos locais.

- Suporte a Acessibilidade: Fornece suporte a acessibilidade. 

## Inicialização

Para instalar o React Bootstrap basta:

```bash
npm install react-bootstrap bootstrap
```

Para importar algum componente basta:

```javascript
import Button from 'react-bootstrap/Button';
```

Como o React-Bootstrap não depende de uma versão específica do Bootstrap, o pacote não inclui nenhum css. Para isto importa-se o css a seguir para o src/index.js ou o App.js:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

Caso você esteja utilizando Saas a maneira mais fácil de incluir o estilos é através das seguintes importações:

```scss
/* The following line can be included in a src/App.scss */
@import '~bootstrap/scss/bootstrap';
```

```javascript
/* The following line can be included in your src/index.js or App.js file */
import './App.scss';
```

## Customizando o Bootstrap

Para customizar o tema ou qualquer variável do Bootstrap basta criar um arquivo custom.scss e importa-lo no src/App.scss:

```scss
/* The following block can be included in a custom.scss */

/* make the customizations */
$theme-colors: (
  'info': tomato,
  'danger': teal
);

/* import bootstrap to set changes */
@import '~bootstrap/scss/bootstrap';
```

```scss
/* The following line can be included in a src/App.scss */
@import 'custom';
```

## Modificando a tag HTML do componente:

Utilizando o React-Bootstrap também é possível modificar a tag HTML usando `as` do objeto sendo renderizado:

```html
<Button as="a" variant="primary">Button as Link<Button>
```

## Exemplos


### Criando uma Navbar

```javascript
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
```

### Criando um Modal

```javascript
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;
```

### Definindo os estados de um Modal

```javascript
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
```

## Mais informações

[React-Bootstrap](https://react-bootstrap.netlify.app/)