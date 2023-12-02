# Radix UI

## O que é?

O Radix é uma biblioteca de componentes de interface do usuário sem estilos, com foco em acessibilidade, personalização e experiência do desenvolvedor.

## Vantagens

- **Controle sobre os estilos dos componentes:** O radix não possui estilos pré-definidos, isso siginifica que você tem total controle sobre o estilo dos componentes.

- **Foco em acessibilidade:** Os componentes desta biblioteca são desenvolvidos para serem compreensíveis e utilizáveis por todos os usuários, independentes de suas habilidades ou deficiências. 

- **Aprendizado e Adoção Rápidos:** Devido à sua abordagem simples os desenvolvedores podem aprender e adotar rapidamente os componentes do Radix UI.

## Inicialização

Para instalar o Radix UI basta:

```bash
npm install @radix-ui/themes
```

## Importação dos Temas

O componente Theme define o aspecto visual da sua aplicação. 

Para importar o Tema Global do Radix UI basta:

```javascript
import '@radix-ui/themes/styles.css';
```

Já para adicionar este tema no seu componente basta:

```javascript
import { Theme } from '@radix-ui/themes';

export default function () {
  return (
    <html>
      <body>
        <Theme>
          <MyApp />
        </Theme>
      </body>
    </html>
  );
}
```

## Criação de Componentes

```javascript
import { Flex, Text, Button } from '@radix-ui/themes';

export default function MyApp() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}
```

## Customizando Temas

É possível customizar Temas através de configurações passadas inline. A seguir podem ser visualizadas cada uma destas configurações:

- `accentColor`: A cor de botões primários, links e elementos interativos. 
    - **Opções:** `gray | gold | bronze | brown | yellow | amber | orange | tomato | red | ruby | crimson | pink | plum | purple | violet | iris | indigo | blue | cyan | teal | jade | green | grass | lime | mint | sky`
- `grayColor`: Os temas irão automaticamente escolher um tom de cinza que complemente a cor primária para ser aplicado em bordas textos e elementos não interativos.
    - **Opções:** `gray | mauve | slate | sage | olive | sand` 
- `panelBackground`: define se o fundo do painel deve ser translúcido ou sólido.
    - **Opções:** `translucent | solid`
- `radius`: define o tamanho do raio das bordas dos elementos.
    - **Opções:** `none | medium | full`
- `appearance`: define o esquema de cores do tema.
    - **Opções:** `inherit | light | dark`
- `scaling`: define a escala do de todo o conteúdo dentro do tema.
    - **Opções:** `90% | 95% | 100% | 105% | 110%`

Exemplo de customização:

```javascript
<Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
  <MyApp />
</Theme>
```

## Componentes

- Cada componente possui variações utilizadas para criar hierarquias visuais. 

- Além das variantes, cada componente possui propriedades próprias que podem ser utilizadas para customizá-lo inline, sem a necessidade de editar a folha de estilo destes.

## Mais Informações

- [Radix UI](https://www.radix-ui.com/)
- [Radix UI Theme Playground](https://www.radix-ui.com/themes/playground)
- [Radix UI Icons](https://www.radix-ui.com/icons)
- [Radix UI Colors](https://www.radix-ui.com/icons)