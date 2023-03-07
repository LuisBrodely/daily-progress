import { IProgress } from '../interfaces/IProgress';

const Progress = ({name,videos,colorPrimary,colorSecondary,watched}:IProgress) => {
    const result = (watched*100/videos)

    return(
        <div style = {{marginBottom:'60px'}}>
            <h2>{name} ({videos} Videos)</h2>
            <p>Ingresa la cantidad de videos vistos:</p>
            
            <div style = {{...styles.container, backgroundColor: colorPrimary}}>
                <div style = {{...styles.box,width:`${result.toFixed(1)}%`, backgroundColor: colorSecondary}} />
            </div>
            <p>{watched} videos equivalen a {result.toFixed(1)}% de los {videos} videos totales</p>
        </div>
    )
}

const styles = {
    container: {
        width: '500px',
        height: '30px'
    },
    box: {
        height: '30px',
        transition: 'width 0.5s ease-out'
    },
    text: {
        color: 'white'
    }
}

export default Progress