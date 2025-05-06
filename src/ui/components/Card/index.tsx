import sc from './card.module.scss'

interface Props{
  children: React.ReactNode,
  category: string,
  totalSale: string
}

export const Card = ({children, category, totalSale}:Props) => {
  return (
    <div className={sc.card}>
      <div className={sc['card-body']}>
        <div className={sc.row}>
          <div className={sc.icon_div}>
            <div className={sc.icon_stats}>
              {children}
            </div>
          </div>
          <div className={sc.text_div}>
            <h6 className={sc.semibold }>{category}</h6>
            <h6 className={sc.extrabold}>{totalSale}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
