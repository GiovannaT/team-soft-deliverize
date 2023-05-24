import { BsChevronLeft, BsPersonCircle, BsCart3 } from 'react-icons/bs';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<div className='navbar-images'>
				<BsChevronLeft className='chevron-left' />
				<img src='src/assets/deliverize.png' alt='logo' />
			</div>
			<div className='navbar-user-dinamics'>
				<select name='select'>
					<option value='adress1'>
						<div>
							<strong>Entrega:</strong>
							<small>R. Antonio Braune,</small>
							<small>222</small>
						</div>
					</option>
					<option value='adress2'>
						<div>
							<strong>Entrega:</strong>
							<small>R. Antonio Braune,</small>
							<small>223</small>
						</div>
					</option>
				</select>
				<input
					type='text'
					placeholder='Busque por estabelecimento ou Produto'
				/>
				<button className='icon'>
					<BsPersonCircle className='icon-image' />
					Entrar
				</button>
				<button className='icon'>
					<BsCart3 className='icon-image' />
					Carrinho
				</button>
			</div>
		</div>
	);
};

export default Navbar;
