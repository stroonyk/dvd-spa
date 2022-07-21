import MenuAppBar from '../components/ui/core/MenuAppBar';
import { StyledEngineProvider } from '@mui/material/styles';

const MovieLanding = () => {

    return (
        <StyledEngineProvider injectFirst>
            <MenuAppBar />
        </StyledEngineProvider> 
    );
}

export default MovieLanding;