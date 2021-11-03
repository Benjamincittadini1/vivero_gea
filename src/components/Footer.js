import Menu from "./Menu"

const Footer = () => {
    return(
        
<footer className="footer-distributed">
			<div className="footer-left">
				<h3>Vivero<span>GEA</span></h3>
				<p className="footer-links">
					<Menu/>
				</p>

				<p className="footer-company-name">Vivero GEA © 2021</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Corrientes 987</span> CABA</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+54 11 5555-5556</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@viveroGEA.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>Sobre Nosotros</span>
                    Vivero Gea es un emprendimiento sustentable, queremos ponerle vida a tu dia a dia y llenar de plantas el mundo.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
         )
}

export default Footer