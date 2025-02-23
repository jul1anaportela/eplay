import Product from '../Product'
import { Container, List } from './styles'

import residentEvil from '../../assets/images/resident.png'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image={residentEvil}
          infos={['-10%', 'R$150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={residentEvil}
          infos={['-10%', 'R$150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={residentEvil}
          infos={['-10%', 'R$150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={residentEvil}
          infos={['-10%', 'R$150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
