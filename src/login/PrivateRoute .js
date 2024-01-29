import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // Vérifiez si un jeton est présent dans le stockage local
    const token = localStorage.getItem('token');

    // Si un jeton est présent, rendez les éléments enfants
    // Sinon, redirigez l'utilisateur vers la page de connexion
    return token ? <Outlet/> : <Navigate to='/Login'/>;
}
export default PrivateRoute;