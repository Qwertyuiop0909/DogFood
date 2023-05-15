import { Good } from '../Good/Good'
import styles from './styles.module.css'
import { useSearchProducts } from '../../hooks/useSearchProducts'
import { withQueryReactions } from '../../HOCs/withQueryReactions'
import { getWordByAmmouth } from '../../helpers/functions'

export const Goods = () => {
  const {
    data, isLoading, isError, error, refetch, filters,
  } = useSearchProducts()
  return (
    <GoodsWithReactions
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
      data={data}
      filters={filters}
    />
  )
}

const GoodsContent = ({ data, filters }) => (
  <div>
    <h2>{filters ? `По запросу '${filters}' найдено ${data?.length} ${getWordByAmmouth(data?.length)}` : 'Список товаров'}</h2>
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <button className="btn btn-outline-success me-2" type="button">Main button</button>
        <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
      </form>
    </nav>
    <div className={styles.goods}>
      {data?.filter((elem) => elem.isPublished)
        .map((good) => <Good key={good.id} good={good} />)}
    </div>
  </div>
)

const GoodsWithReactions = withQueryReactions(GoodsContent)
