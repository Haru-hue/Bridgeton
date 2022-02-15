
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
        <header class = "container-fluid">
    <nav class = "navbar navbar-expand-lg d-flex">
        <ul class="navbar-nav ps-5">
            <li class = "nav-item">
                <a href = "404.html" class="nav-link">Top Deals</a>
            </li>
            <li class = "nav-item">
                <a href = "404.html" class="nav-link">Sales</a>
            </li>
            <li class = "nav-item">
                <a href = "404.html" class="nav-link">Trends</a>
            </li>
        </ul>
        <a href = "index.html" class = "navbar-brand">Bridgerton</a>
        <ul class="navbar-nav ms-auto pe-5">
            <input type="text" placeholder="Search" id="bar">
            <li class = "nav-item">
                <i class="fas fa-search pt-2" id="search-bar" onclick="foo()"></i>
            </li>
            <li class = "nav-item">
                <a href = "login.html" class="nav-link"><div>Sign in</div></a>
            </li>
            <li class = "nav-item">
                <i class="fas fa-shopping-bag pt-2"></i>
            </li>
        </ul>
    </nav>
</header>

      `;
    }
  }
  
  customElements.define('header-component', Header);