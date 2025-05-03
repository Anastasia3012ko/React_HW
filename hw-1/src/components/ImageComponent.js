import dogImage from '../assets/dog.jpeg';

function ImageComponent() {
    return(
        <div className={ImageComponent}>
            <img src={dogImage} style={{width: '500px'}}/>
        </div>
    )
}
export default ImageComponent