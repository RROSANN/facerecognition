
import './ImageLinkForm.css';
import 'tachyons';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='f3'>
			<p className='f3'>
				{'I will detect the face in the picture, please copy the adress of the image, each detected image will raise your count'}
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