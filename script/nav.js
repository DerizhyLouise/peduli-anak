const showNavbar = () => {
    const role = sessionStorage.getItem("role");

    const body = document.getElementsByTagName("body")[0];
    const header = document.getElementById("topHeader");
    const navbar = document.createElement("div");

    if (role && role == "admin") {
        header.innerHTML += `
            <div class="w-40">
                <a href="./index.html">
                    <img src="../assets/img/logo_samping.png" alt="logo">
                </a>
            </div>

            <nav class="font-semibold text-lg justify-self-end w-[768px] hidden lg:block">
                <ul class="flex justify-end gap-4 lg:gap-12">
                    <li id="beranda"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./">Beranda</a>
                    </li>
                    <li id="kalkulator"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./calculator.html">Kalkulator</a>
                    </li>
                    <li id="diskusi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./discussion.html">Diskusi</a>
                    </li>
                    <li id="edukasi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <button id="dropdownEdu1" data-dropdown-toggle="dropdownEdu2" class="flex items-center">
                            Edukasi
                            <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                    </li>
                    <li id="publikasi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <button id="dropdownPub1" data-dropdown-toggle="dropdownPub2" class="flex items-center">
                            Publikasi
                            <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                    </li>
                    <li class="flex items-center duration-200 cursor-pointer">
                        <button id="setting1" data-dropdown-toggle="dropdown2" type="button" class="flex justify-center w-40 bg-green-300 hover:bg-green-400 rounded-3xl p-2">
                            <div class="text-xs">
                                <p>System Admin</p>
                                <p class="text-gray-700">Administrator</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flex justify-end w-6/12 lg:hidden">
                <button class="text-2xl hover:text-green-500 duration-200" type="button"
                    data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" data-drawer-placement="right"
                    aria-controls="drawer-navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div id="dropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-28">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="setting1">
                    <li>
                        <a href="./profile.html" class="block px-4 py-2 hover:bg-green-300">Profil</a>
                    </li>
                    <li>
                        <button onclick="logout()" class="block w-full text-left px-4 py-2 hover:bg-green-300">Keluar</button>
                    </li>
                </ul>
            </div>
            <div id="dropdownEdu2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 mt-4">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownEdu1">
                    <li>
                        <a href="./education.html"
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-green-300">Edukasi</a>
                    </li>
                    <li>
                        <a href="./education-dashboard.html"
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-green-300">Dasbor Edukasi</a>
                    </li>
                </ul>
            </div>
            <div id="dropdownPub2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 mt-4">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownPub1">
                    <li>
                        <a href="./publication.html"
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-green-300">Publikasi</a>
                    </li>
                    <li>
                        <a href="./publication-dashboard.html"
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-green-300">Dasbor Publikasi</a>
                    </li>
                </ul>
            </div>
        `;

        navbar.innerHTML = `
            <div id="drawer-navigation"
                class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-64"
                tabindex="-1" aria-labelledby="drawer-navigation-label">
                <div class="border-b-4 border-green-300 pb-2 p-2">
                    <a href="./index.html">
                        <img src="../assets/img/logo_samping.png" alt="logo" class="h-20 w-auto duration-200">
                    </a>
                </div>
                <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase mt-4">Menu</h5>
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
                                    viewBox="0 0 576 512">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                </svg>
                                <span class="ms-3">Beranda</span>
                            </a>
                        </li>
                        <li>
                            <a href="./calculator.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 384 512">
                                    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Kalkulator</span>
                            </a>
                        </li>
                        <li>
                            <a href="./discussion.html"
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
                                    viewBox="0 0 448 512">
                                    <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
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
                                    <a href="./education-dashboard.html"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Dasbor Edukasi</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button"
                                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-green-500"
                                aria-controls="dropdown-publication" data-collapse-toggle="dropdown-publication">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 512 512">
                                    <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/>
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
                                    <a href="./publication.html"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Publikasi</a>
                                </li>
                                <li>
                                    <a href="./publication-dashboard.html"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Dasbor Publikasi</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="./profile.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">     
                                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                        <path
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                    </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Profil</span>
                            </a>
                        </li>
                        <li>
                            <button href="./login.html" onclick="logout()"
                                class="flex items-center justify-start w-full p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span class="flex-1 ms-3 text-left whitespace-nowrap">Keluar</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    } else if (role && role == "nakes") {
        header.innerHTML += `
            <div class="w-40">
                <a href="./index.html">
                    <img src="../assets/img/logo_samping.png" alt="logo">
                </a>
            </div>

            <nav class="font-semibold text-lg justify-self-end w-[768px] hidden lg:block">
                <ul class="flex justify-end gap-4 lg:gap-12">
                    <li id="beranda"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./">Beranda</a>
                    </li>
                    <li id="kalkulator"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./calculator.html">Kalkulator</a>
                    </li>
                    <li id="diskusi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./discussion.html">Diskusi</a>
                    </li>
                    <li id="edukasi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <button id="dropdownEdu1" data-dropdown-toggle="dropdownEdu2" class="flex items-center">
                            Edukasi
                            <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                    </li>
                    <li id="publikasi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <button id="dropdownPub1" data-dropdown-toggle="dropdownPub2" class="flex items-center">
                            Publikasi
                            <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </a>
                    </li>
                    <li class="flex items-center duration-200 cursor-pointer">
                        <button id="setting1" data-dropdown-toggle="dropdown2" type="button" class="flex justify-center w-40 bg-green-300 hover:bg-green-400 rounded-3xl p-2">
                            <div class="text-xs">
                                <p>dr. Derizheese</p>
                                <p class="text-gray-700">Tenaga Kesehatan</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flex justify-end w-6/12 lg:hidden">
                <button class="text-2xl hover:text-green-500 duration-200" type="button"
                    data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" data-drawer-placement="right"
                    aria-controls="drawer-navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div id="dropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-28">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="setting1">
                    <li>
                        <a href="./profile.html" class="block px-4 py-2 hover:bg-green-300">Profil</a>
                    </li>
                    <li>
                        <button onclick="logout()" class="block w-full text-left px-4 py-2 hover:bg-green-300">Keluar</button>
                    </li>
                </ul>
            </div>
            <div id="dropdownEdu2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 mt-4">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownEdu1">
                    <li>
                        <a href="./education.html"
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-green-300">Edukasi</a>
                    </li>
                    <li>
                        <a href="./education-dashboard.html"
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-green-300">Dasbor Edukasi</a>
                    </li>
                </ul>
            </div>
            <div id="dropdownPub2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 mt-4">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownPub1">
                    <li>
                        <a href="./publication.html"
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-green-300">Publikasi</a>
                    </li>
                    <li>
                        <a href="./publication-dashboard.html"
                            class="flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-green-300">Dasbor Publikasi</a>
                    </li>
                </ul>
            </div>
        `;

        navbar.innerHTML = `
            <div id="drawer-navigation"
                class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-64"
                tabindex="-1" aria-labelledby="drawer-navigation-label">
                <div class="border-b-4 border-green-300 pb-2 p-2">
                    <a href="./index.html">
                        <img src="../assets/img/logo_samping.png" alt="logo" class="h-20 w-auto duration-200">
                    </a>
                </div>
                <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase mt-4">Menu</h5>
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
                                    viewBox="0 0 576 512">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                </svg>
                                <span class="ms-3">Beranda</span>
                            </a>
                        </li>
                        <li>
                            <a href="./calculator.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 384 512">
                                    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Kalkulator</span>
                            </a>
                        </li>
                        <li>
                            <a href="./discussion.html"
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
                                    viewBox="0 0 448 512">
                                    <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
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
                                    <a href="./education-dashboard.html"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Dasbor Edukasi</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button"
                                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-green-500"
                                aria-controls="dropdown-publication" data-collapse-toggle="dropdown-publication">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 512 512">
                                    <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/>
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
                                    <a href="./publication.html"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Publikasi</a>
                                </li>
                                <li>
                                    <a href="./publication-dashboard.html"
                                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-green-500">Dasbor Publikasi</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="./profile.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">     
                                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                        <path
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                    </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Profil</span>
                            </a>
                        </li>
                        <li>
                            <button href="./login.html" onclick="logout()"
                                class="flex items-center justify-start w-full p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span class="flex-1 ms-3 text-left whitespace-nowrap">Keluar</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    } else if (role && role == "user") {
        header.innerHTML += `
            <div class="w-40">
                <a href="./index.html">
                    <img src="../assets/img/logo_samping.png" alt="logo">
                </a>
            </div>

            <nav class="font-semibold text-lg justify-self-end w-[768px] hidden lg:block">
                <ul class="flex justify-end gap-4 lg:gap-12">
                    <li id="beranda"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./">Beranda</a>
                    </li>
                    <li id="kalkulator"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./calculator.html">Kalkulator</a>
                    </li>
                    <li id="diskusi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./discussion.html">Diskusi</a>
                    </li>
                    <li id="edukasi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./education.html">Edukasi</a>
                    </li>
                    <li id="publikasi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./publication.html">Publikasi</a>
                    </li>
                    <li class="flex items-center duration-200 cursor-pointer">
                        <button id="setting1" data-dropdown-toggle="dropdown2" type="button" class="flex justify-center w-40 bg-green-300 hover:bg-green-400 rounded-3xl p-2">
                            <div class="text-xs">
                                <p>Nama Pengguna</p>
                                <p class="text-gray-700">Pengguna</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flex justify-end w-6/12 lg:hidden">
                <button class="text-2xl hover:text-green-500 duration-200" type="button"
                    data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" data-drawer-placement="right"
                    aria-controls="drawer-navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div id="dropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-28">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="setting1">
                    <li>
                        <a href="./profile.html" class="block px-4 py-2 hover:bg-green-300">Profil</a>
                    </li>
                    <li>
                        <button onclick="logout()" class="block w-full text-left px-4 py-2 hover:bg-green-300">Keluar</button>
                    </li>
                </ul>
            </div>
        `;

        navbar.innerHTML = `
            <div id="drawer-navigation"
                class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-64"
                tabindex="-1" aria-labelledby="drawer-navigation-label">
                <div class="border-b-4 border-green-300 pb-2 p-2">
                    <a href="./index.html">
                        <img src="../assets/img/logo_samping.png" alt="logo" class="h-20 w-auto duration-200">
                    </a>
                </div>
                <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase mt-4">Menu</h5>
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
                                    viewBox="0 0 576 512">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                </svg>
                                <span class="ms-3">Beranda</span>
                            </a>
                        </li>
                        <li>
                            <a href="./calculator.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 384 512">
                                    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Kalkulator</span>
                            </a>
                        </li>
                        <li>
                            <a href="./discussion.html"
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
                            <a href="./education.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Edukasi</span>
                            </a>
                        </li>
                        <li>
                            <a href="./publication.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 512 512">
                                    <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Publikasi</span>
                            </a>
                        </li>
                        <li>
                            <a href="./profile.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">     
                                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                        <path
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                    </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Profil</span>
                            </a>
                        </li>
                        <li>
                            <button href="./login.html" onclick="logout()"
                                class="flex items-center justify-start w-full p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span class="flex-1 ms-3 text-left whitespace-nowrap">Keluar</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    } else {
        header.innerHTML += `
            <div class="w-40">
                <a href="./index.html">
                    <img src="../assets/img/logo_samping.png" alt="logo">
                </a>
            </div>

            <nav class="font-semibold text-lg justify-self-end w-[768px] hidden lg:block">
                <ul class="flex justify-end gap-4 lg:gap-12">
                    <li id="beranda"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./">Beranda</a>
                    </li>
                    <li id="kalkulator"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./calculator.html">Kalkulator</a>
                    </li>
                    <li id="diskusi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./discussion.html">Diskusi</a>
                    </li>
                    <li id="edukasi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./education.html">Edukasi</a>
                    </li>
                    <li id="publikasi"
                        class="flex items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="./publication.html">Publikasi</a>
                    </li>
                    <li class="flex items-center duration-200 cursor-pointer">
                        <button onclick="logout()" class="flex items-center justify-center h-10 w-20 bg-green-300 hover:bg-green-400 rounded-3xl p-2">
                            <div class="text-xs">
                                <p>Masuk</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flex justify-end w-6/12 lg:hidden">
                <button class="text-2xl hover:text-green-500 duration-200" type="button"
                    data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" data-drawer-placement="right"
                    aria-controls="drawer-navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        `;

        navbar.innerHTML = `
            <div id="drawer-navigation"
                class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-64"
                tabindex="-1" aria-labelledby="drawer-navigation-label">
                <div class="border-b-4 border-green-300 pb-2 p-2">
                    <a href="./index.html">
                        <img src="../assets/img/logo_samping.png" alt="logo" class="h-20 w-auto duration-200">
                    </a>
                </div>
                <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase mt-4">Menu</h5>
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
                                    viewBox="0 0 576 512">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                </svg>
                                <span class="ms-3">Beranda</span>
                            </a>
                        </li>
                        <li>
                            <a href="./calculator.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 384 512">
                                    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Kalkulator</span>
                            </a>
                        </li>
                        <li>
                            <a href="./discussion.html"
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
                            <a href="./education.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Edukasi</span>
                            </a>
                        </li>
                        <li>
                            <a href="./publication.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 512 512">
                                    <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/>
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Publikasi</span>
                            </a>
                        </li>
                        <li>
                            <a href="./profile.html"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">     
                                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                        <path
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                    </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Profil</span>
                            </a>
                        </li>
                        <li>
                            <button href="./login.html" onclick="logout()"
                                class="flex items-center justify-start w-full p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span class="flex-1 ms-3 text-left whitespace-nowrap">Masuk</span>
                            </button>
                        </li>
                        <li>
                            <a href="./register.html"
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
        `;
    }

    body.appendChild(navbar);
};

const showFooter = () => {
    const body = document.getElementsByTagName("body")[0];
    const footer = document.createElement("footer");
    footer.className = "bg-green-200 text-center text-surface/75 lg:text-left";

    footer.innerHTML = `
        <div
            class="flex items-center justify-center border-b-2 border-gray-600 p-6 lg:justify-between">
            <div class="me-12 hidden lg:block">
                <span>Temukan kami pada media sosial kami:</span>
            </div>
            
            <div class="flex justify-center">
                <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                        <path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                </a>
                <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                        <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                </a>
                <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
                        <path
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                </a>
                <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                </a>
                <a href="#!" class="me-6 [&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <path
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                </a>
                <a href="#!" class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                </a>
            </div>
        </div>

        <div class="mx-6 py-10 text-center md:text-left">
            <div class="grid-1 grid gap-8 md:grid-cols-2">
                <div class="">
                    <h6 class="text-2xl text-green-500 mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
                        <img src="../assets/img/logo_samping.png" alt="logo" class="w-auto h-28">
                    </h6>
                    <p>
                        Peduli Anak bertekad menciptakan masa depan lebih cerah bagi anak-anak Indonesia dengan memerangi stunting, kondisi gagal tumbuh akibat gizi kronis.
                    </p>
                </div>
                
                <div>
                    <h6 class="text-green-500 mb-4 flex justify-center font-bold uppercase md:justify-start">
                        Kontak
                    </h6>
                    <p class="mb-4 flex items-center justify-center md:justify-start">
                        <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                        </span>
                        Jl. M.H. Thamrin 74D-E, Kec. Medan Kota, Kota Medan, Sumatera Utara 20212
                    </p>
                    <p class="mb-4 flex items-center justify-center md:justify-start">
                        <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                        </span>
                        pedulianak@mail.com
                    </p>
                    <p class="mb-4 flex items-center justify-center md:justify-start">
                        <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        +62 899 9999 9999
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-green-00 p-6 text-center">
            <span>© 2024 Copyright:</span>
            <a class="font-semibold" href="#">Peduli Anak</a>
        </div>
    `;

    body.appendChild(footer);
};

const logout = () => {
    sessionStorage.removeItem("role");
    window.location.href = "./login.html";
};

showNavbar();
showFooter();
