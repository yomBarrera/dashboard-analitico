import DropRol from '../DropRol'
import FontChange from '../FontChange'
import HomeButton from '../HomeLink'
import ThemeToggle from '../ThemeToggle'
import sc from './header.module.scss'


export const Header = () => {
  return (
    <div className={sc.header}> 
    
    <div className="title">
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


