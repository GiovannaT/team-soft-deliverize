import { useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs';

const NumberInput = () => {
	const [currentValue, setCurrentValue] = useState(0);

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
			<FiMinus
				type='button'
				className={currentValue <= 0 ? 'zero-value' : 'icon'}
				onClick={() => handleSubtraction()}
			/>
			<input
				type='number'
				name='number'
				id='number'
				value={currentValue}
				min={0}
			/>
			<BsPlusLg className='icon' onClick={() => handleAddition()} />
		</div>
	);
};

export default NumberInput;
