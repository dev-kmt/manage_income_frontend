import React,{Suspense} from 'react';
import { 
    BrowserRouter,
    Route,
    Routes
 } from "react-router-dom";
import HomePage from '../pages/HomePage';
import SaveIncome from '../pages/manageIncome/SaveIncome';
import SharedLayout from './SharedLayout';
import ErrorPage from '../pages/Error';
import WishList from '../pages/WishList';
import ManageIncome from '../pages/ManageIncome';
import Create from '../pages/manageIncome/Form';

const DemoSpinner = () => (<p>Spinner</p>);
const AppRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='save_income'>
                        <Route index element={<SaveIncome/>}></Route>
                        <Route path="create" element={<Create/>}></Route>
                    </Route>
                    <Route path='wish_list' element={<WishList />} />
                    <Route path='manage_income' element={<ManageIncome />} />

                    {/* <Route path='products' element={<SharedProductLayout />}>
                        <Route index element={<Products />} />
                        <Route path=':productId' element={<SingleProduct />} />
                    </Route>

                    <Route path='login' element={<Login setUser={setUser}></Login>} />
                    <Route
                        path='dashboard'
                        element={
                        <ProtectedRoute user={user}>
                            <Dashboard user={user} />
                        </ProtectedRoute>
                        }
                    /> */}
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
    
}
export default AppRouter;