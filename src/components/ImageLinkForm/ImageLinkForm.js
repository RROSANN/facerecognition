import react from 'react';
import './ImageLinkForm.css';
import 'tachyons';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='f3'>
			<p className='f3'>
				{'This magic Light will detect faces in your picture, try it'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input className='f4 pa2  w-70 center' type='text' onChange={onInputChange} />
					<button 
						className=' w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;