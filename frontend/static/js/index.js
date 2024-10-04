import HomePage from "./pages/HomePage.js";
import GameFormPage from "./pages/GameFormPage.js";
import LoginPage from "./pages/LoginPage.js";
import AuthStateHelper from "./helper/state/AuthStateHelper.js";
import AuthLayout from "./components/layouts/AuthLayout.js";
import LoggedInLayout from "./components/layouts/LoggedInLayout.js";
import './helper/api/AxiosRequestInterceptor.js';

export const navigateTo = (url) => {
    history.pushState({}, "", url);
    loadPage();
}

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    const isAuth = !!AuthStateHelper.getAccessToken();
    if (!isAuth && event.target.href !== '/login') {
        navigateTo('/login');
    } else {
        navigateTo(event.target.href);
    }
}

function loadLayout() {
    const isAuth = !!AuthStateHelper.getAccessToken();
    if (isAuth) {
        new LoggedInLayout("container");
        return;
    }
    new AuthLayout("container");
}

function loadPage() {
    loadLayout();
    const isAuth = !!AuthStateHelper.getAccessToken();
    if (!isAuth) {
        history.pushState({}, "", "/login");
        return new LoginPage('layout-content');
    }
    if (location.pathname === '/') {
        new HomePage('layout-content');
    } else if (location.pathname === '/add') {
        new GameFormPage('layout-content');
    } else if (location.pathname === '/login') {
        new LoginPage('layout-content');
    }
}


window.route = route;
window.onpopstate = loadPage;

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    loadPage()
});
