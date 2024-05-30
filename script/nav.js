const showNavbar = () => {
    const body = document.getElementsByTagName("body")[0];
    const header = document.createElement("header");
    const navbar = document.createElement("div");

    header.className =
        "w-full h-20 top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 fixed";

    header.innerHTML = `
        <div class="w-8/12  md:w-9/12 flex gap-6">
            <button class="text-2xl hover:text-green-500 duration-200" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="w=8/12">
                <a href="./index.html">
                    <img src="../assets/svg/logo_samping.svg" alt="logo" class="h-20 w-auto duration-200 py-4">
                </a>
            </div>
        </div>

        <div class="w-4/12 flex justify-end">
            <a href="#" class="">
                <img class="w-12 h-12 border-2 border-green-500 rounded-full" src="../assets/img/avatar1.jpg" alt="Avatar">
            </a>
        </div>
    `;

    navbar.innerHTML = `
        <div id="drawer-navigation"
            class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64"
            tabindex="-1" aria-labelledby="drawer-navigation-label">
            <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase">Menu
            </h5>
            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
                class="text-gray-400 bg-transparent hover:bg-green-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <div class="py-4 overflow-y-auto">
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="./index.html"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                            </svg>
                            <span class="ms-3">Beranda</span>
                        </a>
                    </li>
                    <li>
                        <a href="./calculator.html"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M7 2h10c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 2v16h10V4H7zm2 2h6v2H9V6zm-2 6h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Kalkulator</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 18">
                                <path d="M5 0C2.24 0 0 2.24 0 5v5c0 2.76 2.24 5 5 5h1v3l4-3h5c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5H5zm10 2c1.66 0 3 1.34 3 3v5c0 1.66-1.34 3-3 3H9l-3 3v-3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h10z"/>
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Diskusi</span>
                        </a>
                    </li>
                    <li>    
                        <button type="button"
                            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-green-500"
                            aria-controls="dropdown-education" data-collapse-toggle="dropdown-education">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 18">
                                <path d="M18 2h-7c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h7v2h-7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h7c.55 0 1 .45 1 1v12h-1V2zm-9 0H2C.9 2 0 2.9 0 4v10c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM2 4h7v10H2V4z"/>
                            </svg>
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Edukasi</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul id="dropdown-education" class="hidden py-2 space-y-2">
                            <li>
                                <a href="./education.html"
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Edukasi</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Unggah Konten Edukasi</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button type="button"
                            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-green-500"
                            aria-controls="dropdown-publication" data-collapse-toggle="dropdown-publication">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M19 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H8V4h11v16zm-7-5H9v-2h3v2zm0-4H9V9h3v2zm5 4h-3v-2h3v2zm0-4h-3V9h3v2z"/>
                                <path d="M4 6h2v12H4z"/>
                            </svg>
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Publikasi</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul id="dropdown-publication" class="hidden py-2 space-y-2">
                            <li>
                                <a href="#"
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Publikasi</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Unggah Publikasi</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="./auth/login.html"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Masuk</span>
                        </a>
                    </li>
                    <li>
                        <a href="./auth/register.html"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                <path
                                    d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                <path
                                    d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Daftar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `

    body.appendChild(header);
    body.appendChild(navbar);
};

showNavbar();
