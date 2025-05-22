import Tag from '../Tag'
import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  title: string
  system: string
  category: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  system,
  category,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Product
