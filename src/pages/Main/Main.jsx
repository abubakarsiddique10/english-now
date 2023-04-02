import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Vocabulary from "../Vocabulary/Vocabulary";
import VocabularyRendered from "../Vocabulary/VocabularyRendered";
import VocabularyCategory from "../Vocabulary/VocabularyCategory";
import Dashboard from "../dashboard/Dashboard";
import AddVocabulary from "../dashboard/AddVocabulary";
import Post from "../../components/Post/Post";
import SignUp from "../Login/SignUp";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import RequireAuth from "../../Authentication/RequireAuth";
import ProfileUpdate from "../Profile/ProfileUpdate";
import ResetPaasword from "../Login/ResetPaasword";
import NewPassword from "../Login/NewPassword";
import { pages } from "../../components/Header/menuItems";
import PostForm from "../../components/Post/PostForm";


const Main = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <main className={`w-full ${path === "/" ? "body-color" : "null"}`}>
            <div className="w-full md:container">
                <div className="flex md:gap-5">
                    <aside className={`sidebar z-40 hidden md:block ${path === "/" ? "block" : "md:hidden"}`}>
                        <ul className="pr-4 py-3 rounded">
                            {
                                pages.map((page, index) => <li key={index} className="nav-link">
                                    <page.icon className="text-xl" />
                                    <Link to={page.link} className="ml-3 text-black">{page.name}</Link>
                                </li>)
                            }
                        </ul>
                    </aside>

                    <div className="mt-0 flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/vocabulary" element={<Vocabulary />} >
                                <Route index element={<VocabularyCategory />} />
                                <Route path=":category" element={<VocabularyRendered />} />
                            </Route>
                            <Route path="/dashboard" element={<Dashboard />}>
                                <Route path="addVocabulary" element={<AddVocabulary />} />
                            </Route>
                            <Route path="/post" element={<Post />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/resetPaasword" element={<ResetPaasword />} />
                            <Route path="/newPassword/:phoneNumber" element={<NewPassword />} />
                            <Route path="/profile" element={<RequireAuth>
                                <Profile />
                            </RequireAuth>} />
                            <Route path="/profileEdit" element={<RequireAuth>
                                <ProfileUpdate />
                            </RequireAuth>} />
                            <Route path="/postForm" element={<PostForm />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;
