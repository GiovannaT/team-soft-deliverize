import { useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs';
import PropTypes from 'prop-types';

const NumberInput = (props) => {
	const [currentValue, setCurrentValue] = useState(props.dfValue);

	const handleAddition = () => {
		setCurrentValue(currentValue + 1);
	};

	const handleSubtraction = () => {
		if (currentValue > 0) {
			setCurrentValue(currentValue - 1);
		}
	};

	return (
		<div className='input-number-count'>
			<FiMinus className='icon' onClick={() => handleSubtraction()} />
			<input
				type='number'
				name='number'
				id='number'
				min={0}
				defaultValue={currentValue}
			/>
			<BsPlusLg className='icon' onClick={() => handleAddition()} />
		</div>
	);
};
export default NumberInput;

NumberInput.propTypes = {
	dfValue: PropTypes.number.isRequired,
};
