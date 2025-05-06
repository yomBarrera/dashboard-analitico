import { InputSelect, DateSelect, Card } from '@/ui/components'
import Main from '@/ui/layouts/main'
import Link from 'next/link'


const Home = () => {
  return (
    <Main>

      <h2>filters</h2>
      <InputSelect/>
      <DateSelect/>
      <Card/>
      <h2>Hightcharts</h2>

      <h2>Datatable</h2>


      <Link href="/detail/123">Order 123</Link>
    </Main>
  )
}

export default Home

