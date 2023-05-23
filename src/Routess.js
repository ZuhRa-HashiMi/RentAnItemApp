import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import App from './pages/App';
import HouseDetails from './pages/HouseDetail/HouseDetails';
import Login from './componenets/auth/Login';
import Registration from './componenets/auth/Registration';
import { updateUser } from './redux/favorites/favoriteReducer';

const Routess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSuccessfulAuth = (data) => {
    dispatch(updateUser(data.user));
    navigate('/houses');
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="login" element={<Login handleSuccessfulAuth={handleSuccessfulAuth} />} />
        <Route path="register" element={<Registration handleSuccessfulAuth={handleSuccessfulAuth} />} />

        <Route path="houses">
          <Route index element={<Home handleSuccessfulAuth={handleSuccessfulAuth} />} />
          <Route path="favorites" element={<MyFavourites />} />
          <Route path="add" element={<AddHouse />} />
          <Route path="delete" element={<DeleteHouse />} />
          <Route path=":houseId" element={<HouseDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routess;
