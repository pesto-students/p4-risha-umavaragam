import './header.css'

function Header(){
    return <header className='site-header'>
    <div className='site-identity'>
      <h1><a>Shortly</a></h1>
    </div>  
    <nav className='site-navigation'>
      <ul className='nav'>
        <li><a>About</a></li> 
        <li><a>News</a></li> 
        <li><a>Contact</a></li> 
      </ul>
    </nav>
  </header>
}

export default Header