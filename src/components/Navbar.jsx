import {
	BsChevronLeft,
	BsPersonCircle,
	BsXLg,
	BsCart3,
	BsSearch,
} from 'react-icons/bs';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [adress, setadress] = useState('R Antonio Braune, 21');

	const handleChange = (event) => {
		setadress(event.target.value);
	};

	return (
		<nav className='navbar-container'>
			<div className='navbar-images'>
				{open ? (
					<BsXLg
						onClick={() => {
							setOpen(false);
						}}
					/>
				) : (
					<BsChevronLeft
						className='chevron-left'
						onClick={() => {
							setOpen(true);
						}}
					/>
				)}
				<img src='src/assets/deliverize.png' alt='logo' />
			</div>
			<div className={open ? 'navbar-hamburguer-menu' : 'navbar-user-dinamics'}>
				<FormControl fullWidth>
					<Select
						className='select'
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={adress}
						defaultValue='R Antonio Braune, 21'
						placeholder='Selecione o endereço'
						onChange={handleChange}
					>
						<MenuItem className='select-option' value='R Antonio Braune, 21'>
							R Antonio Braune, 21
						</MenuItem>
						<MenuItem value='R Antonio Braune, 22'>
							R Antonio Braune, 22
						</MenuItem>
					</Select>
				</FormControl>
				<div className='input-text'>
					<input
						type='text'
						placeholder='Busque por estabelecimento ou Produto'
					/>
					<BsSearch className='icon'></BsSearch>
				</div>
				<button className='icon'>
					<BsPersonCircle className='icon-image' />
					Entrar
				</button>
				<button className='icon'>
					<BsCart3 className='icon-image' />
					Carrinho
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
