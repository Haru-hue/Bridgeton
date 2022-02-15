class Footer extends HTMLElement {
    constructor () {
       super(); 
    }
    connectedCallback () {
        this.innerHTML = `<footer class = "container-fluid pt-5">
        <div class = "container">
            <div class = "row pb-5">
                <div class = "col-lg-6">
                    <div class = "footer-logo">Bridgerton</div>
                </div>
                <div class = "col-lg-6">
                    <div class = "row ps-5">
                        <div class = "col-lg-3">
                            <ul class = "footer-nav">
                                <li>Delivery</li>
                                <li>Returns</li>
                                <li>Contact</li>
                                <li>Get Help</li>
                            </ul>
                        </div>
                        <div class = "col-lg-4">
                            <ul class = "footer-nav">
                                <li>About Us</li>
                                <li>Events</li>
                                <li>Stock with Us&nbsp;</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "copy-text text-center pt-5 mt-5">&copy; COPYRIGHT 2022 by me</div>
    </footer>`
    }
}

customElements.define('footer-component', Footer)