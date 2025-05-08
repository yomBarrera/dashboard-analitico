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
            <p className={sc.semibold }>{category}</p>
            <p className={sc.extrabold}>{totalSale}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
