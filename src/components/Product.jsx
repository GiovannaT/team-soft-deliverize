import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Popover from '@mui/material/Popover';

import { useGetProducts } from '../api/queries';
import NumberInput from './NumberInput';

const Product = () => {
	const { data } = useGetProducts();

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<div>
				{data &&
					data.map((product) => {
						const ingredients = Object.values(product.ingredients);
						return (
							<form
								key={product.id}
								className='product-view'
								onSubmit={handleSubmit(onSubmit)}
							>
								<input
									type='text'
									defaultValue={product.nm_product}
									value={product.nm_product}
									className='hidden-input'
									{...register('product')}
								/>
								<div className='product-description'>
									<img src='src/assets/foto.png' alt={product.nm_product} />
									<h3>{product.nm_product}</h3>
									<h4>{product.description}</h4>
									<div className='product-values'>
										{product.vl_discount && (
											<small className='product-value-discount'>
												R${product.vl_discount}
											</small>
										)}
										<small className='product-value-price'>
											R${product.vl_price}
										</small>
									</div>
								</div>
								<div className='product-choices'>
									<div className='product-choices-info'>
										<div className='product-choices-info-head'>
											<h3>Adicionar ingredientes</h3>
											<small>Até 8 ingredientes</small>
										</div>
										{ingredients &&
											ingredients.map((ingredient, index) => {
												const items = Object.values(ingredient.itens);
												return (
													<div key={ingredient.group}>
														{index == 0 &&
															items &&
															items.map((item) => {
																return (
																	<>
																		<div
																			key={item.id}
																			className='product-choices-item'
																		>
																			<div className='product-choices-item-description'>
																				<h3>{item.nm_item}</h3>
																				<p>+R${item.vl_item}</p>
																			</div>
																			<NumberInput />
																		</div>
																		<hr />
																	</>
																);
															})}
														{index !== 0 && (
															<>
																<div className='product-choices-footer'>
																	<h3>{ingredient.group}</h3>
																</div>

																<div className='product-choices-footer-input'>
																	<form action=''>
																		<div className='footer-input'>
																			<label htmlFor='talher1'>Sim</label>
																			<input
																				type='radio'
																				name='boolean'
																				value='yes'
																				id='talher1'
																				{...register('talher_sim')}
																			/>
																		</div>
																		<div className='footer-input'>
																			<label htmlFor='talher2'>Não</label>
																			<input
																				type='radio'
																				name='boolean'
																				value='no'
																				id='talher2'
																				{...register('talher_nao')}
																			/>
																		</div>
																	</form>
																</div>
															</>
														)}
													</div>
												);
											})}
									</div>
									<div className='product-choices-submit'>
										<NumberInput {...register('number')} />
										<button type='submit' onClick={handleClick}>
											Adicionar
										</button>
										<div>
											<Popover
												id={id}
												open={open}
												anchorEl={anchorEl}
												onClose={handleClose}
												anchorReference='anchorPosition'
												anchorPosition={{ top: 110, left: 1500 }}
												anchorOrigin={{
													vertical: 'top',
													horizontal: 'right',
												}}
												transformOrigin={{
													vertical: 'center',
													horizontal: 'center',
												}}
											>
												<div className='popover-content'>
													<h4 className='popover-content-title'>
														Adicionado com Sucesso
													</h4>
													<h5 className='popover-content-product'>
														{product.nm_product}
													</h5>
												</div>
											</Popover>
										</div>
									</div>
								</div>
							</form>
						);
					})}
			</div>
		</>
	);
};

export default Product;
