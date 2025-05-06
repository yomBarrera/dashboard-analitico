import DateSelect from '@/ui/components/DatePicker'
import InputSelect from '@/ui/components/ImputSelect'
import Main from '@/ui/layouts/main'
import Link from 'next/link'

const Home = () => {
  return (
    <Main>
      <InputSelect/>
      <Link href="/detail/123">Order 123</Link>
      <DateSelect/>
    </Main>
  )
}

export default Home

