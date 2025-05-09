import { useRouter } from 'next/router'
import DropRol from '../DropRol'
import FontChange from '../FontChange'
import HomeButton from '../HomeLink'
import ThemeToggle from '../ThemeToggle'
import sc from './header.module.scss'


export const Header = () => {
  const router = useRouter()

  const navigate =()=>{
    router.push('/dashboard')
  }
  return (
    <div className={sc.header}> 
  
    <div className={sc.title} onClick={navigate}>
      <h1>Dashboard</h1>
    </div>

    <div className={sc.access_buttons}>
      <HomeButton/>
      <FontChange/>
      <ThemeToggle />
      <DropRol/>
    </div>
    
    </div>
  )
}


