import Menu from "./Menu"

const Footer = () => {
    return(
        
<footer class="footer-distributed">
			<div class="footer-left">
				<h3>Vivero<span>GEA</span></h3>
				<p class="footer-links">
					<Menu/>
				</p>

				<p class="footer-company-name">Vivero GEA © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Corrientes 987</span> CABA</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+54 11 5555-5556</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@viveroGEA.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>Sobre Nosotros</span>
                    Vivero Gea es un emprendimiento sustentable, queremos ponerle vida a tu dia a dia y llenar de plantas el mundo.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
         )
}

export default Footer